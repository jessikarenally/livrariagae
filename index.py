#coding: utf-8

import os
import cgi
import json

import webapp2
import jinja2

from google.appengine.ext import ndb

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    variable_start_string='[%',
    variable_end_string='%]',
    autoescape=True)

def data2json(data):
    return json.dumps(
        data,
        indent=2,
        separators=(',', ': '),
        ensure_ascii=False
    )

def book_unicode_to_str(book):
    temp = {}
    for key in book.keys():
        print cgi.escape(key)
        temp[cgi.escape(key)] = (book[key])
    print "oooooasajsaksjaksa", temp.titulo
    for i in range(len(temp['autores'])):
        temp['autores'][i] = cgi.escape(temp['autores'][i])

    return temp

class User(ndb.Model):
    login = ndb.StringProperty()
    password = ndb.StringProperty()
    token = ndb.StringProperty()

class Book(ndb.Model):
    titulo = ndb.StringProperty()
    autores = ndb.PickleProperty(repeated = True)
    descricao = ndb.TextProperty()
    url_capa = ndb.StringProperty()
    preco = ndb.FloatProperty()
    comentarios = ndb.TextProperty(repeated = True)

    def to_dict(self):
        book = {"titulo": self.titulo, "autores": self.autores, "descricao": self.descricao, "url_capa": self.url_capa, "preco": self.preco}
        return book

class MainPage(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('livraria.html')
        self.response.write(template.render({}))

class LoginHandler(webapp2.RequestHandler):
    def get(self):
        template = JINJA_ENVIRONMENT.get_template('login.html')
        self.response.write(template.render({}))

class BookHandler(webapp2.RequestHandler):
    def get(self, titulo):
        book = Book.query(Book.titulo == titulo).get()
        self.response.write(simplejson.dumps(book.to_dict()))

    def put(self, titulo):
        new_book = json.loads(self.request.body)
        book_on_db = Book.query(Book.titulo == titulo).get() 

        temp = {}
        for key in new_book.keys():
            temp[cgi.escape(key)] = (new_book[key])
        print temp
        for i in range(len(temp['autores'])):
            temp['autores'][i] = cgi.escape(temp['autores'][i])

        for i in range(len(temp['comentarios'])):
            temp['comentarios'][i] = cgi.escape(temp['comentarios'][i])

        book_on_db.titulo = cgi.escape(temp["titulo"])
        book_on_db.autores = temp['autores']
        book_on_db.descricao = cgi.escape(temp["descricao"])
        book_on_db.url_capa = cgi.escape(temp["url_capa"])
        book_on_db.preco = float(temp["preco"])
        book_on_db.comentarios = temp['comentarios']
        book_on_db.put()

    def delete(self):
        pass

class LibraryHandler(webapp2.RequestHandler):
    
    def get(self):
    	books = Book.query()
        URLBASE = self.request.host_url
        
        data = []
        for b in books:
            book = {"titulo": b.titulo, "autores": b.autores, "descricao": b.descricao, "url_capa": b.url_capa,"preco": b.preco, "comentarios": b.comentarios}
            data.append({"book": book})
        self.response.write(data2json(data))

    def post(self):
    	book = json.loads(self.request.body)
    	temp = {}

    	for key in book.keys():
    		temp[cgi.escape(key)] = (book[key])

    	for i in range(len(temp['autores'])):
            temp['autores'][i] = cgi.escape(temp['autores'][i])

    	new_book = Book()
    	new_book.titulo = cgi.escape(temp['titulo'])
    	new_book.autores = temp['autores']
    	new_book.descricao = cgi.escape(temp['descricao'])
    	new_book.url_capa = cgi.escape(temp['url_capa'])
    	new_book.preco = float(temp['preco'])
        new_book.comentarios = temp["comentarios"]
    	new_book.put()

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/book', LibraryHandler),
    ('/book/(.*)', BookHandler),
    ('/login', LoginHandler)
], debug=True)