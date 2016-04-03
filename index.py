#coding: utf-8
import os
import cgi

import webapp2
import jinja2

from google.appengine.ext import ndb
from django.utils import simplejson
import json

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    variable_start_string='[%',
    variable_end_string='%]',
    autoescape=True)

class Book(ndb.Model):
	titulo = ndb.StringProperty()
	autores = ndb.PickleProperty()
	descricao = ndb.TextProperty()
	url_capa = ndb.StringProperty()
	preco = ndb.FloatProperty()

class MainPage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('livraria.html')
        self.response.write(template.render({}))

class LibraryHandler(webapp2.RequestHandler):
    def get(self):
    	books = Book.query()
    	self.response.write(simplejson.dumps(books))

    def get(self, id):
    	title = self.request.get('titulo')
    	book = Book.query(Book.titulo == title)
    	self.response.write(simplejson.dumps(book))

    def put(self, id, new_book):
    	title = self.request.get('titulo')
    	book_on_db = Book.query(Book.titulo == title) 
    	book_on_db = new_book
    	book_on_db.put()

    def post(self):
    	book = json.loads(self.request.body)
    	temp = {}
    	for key in book.keys():
    		temp[cgi.escape(key)] = (book[key])
        print temp
    	for i in range(len(temp['autores'])):
            temp['autores'][i] = cgi.escape(temp['autores'][i])

    	new_book = Book()
    	new_book.titulo = cgi.escape(temp['titulo'])
    	new_book.autores = temp['autores']
    	new_book.descricao = cgi.escape(temp['descricao'])
    	new_book.url_capa = cgi.escape(temp['url_capa'])
    	new_book.preco = float(temp['preco'])
        
    	new_book.put()

    def delete(self):
    	pass

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/book', LibraryHandler),
    ('/book/', LibraryHandler)
], debug=True)
