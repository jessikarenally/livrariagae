(function () { 
	livrariaModule = angular.module("livraria", ['ui.bootstrap']);

	livrariaModule.controller("LivrariaController", ['$scope', '$uibModal', '$http', '$httpParamSerializerJQLike', function ($scope, $uibModal, $http, $httpParamSerializerJQLike){
		var self = this;

		self.novoLivro;

		self.indiceEmUso;

		self.comentario = [];

		self.carrinho = [];

		self.modoCarrinho = false;

		self.total = 0;
		
		self.ddb = [
			{book : {
				titulo: "O mínimo que você precisa saber para não ser um idiota",
				autores: ["Olavo de Carvalho"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://veja.abril.com.br/blog/reinaldo/files/2013/09/capa-do-livro-olavo.jpg",
				preco: 45.50,
				comentarios: ['bom', 'inteligente']
			}},
			{book: {
				titulo: "O Senhor dos aneis - A sociedade do anel (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://portal.julund.com.br/wp-content/uploads/2014/01/LOTR-duas-torres.jpg",
				preco: 45.50,
				comentarios: ['excelente', 'incrivel', "empolgante"]
			}},
			{book: {
				titulo: "O Senhor dos aneis - As Duas Torres (segundo livro)         .",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://portal.julund.com.br/wp-content/uploads/2014/01/LOTR-duas-torres.jpg",
				preco: 45.50,
				comentarios: ['excelente', 'incrivel',"empolgante"]
			}},
			{book: {
				titulo: "O Senhor dos aneis - O retorno do Rei (terceiro livro)     ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://portal.julund.com.br/wp-content/uploads/2014/01/LOTR-duas-torres.jpg",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}},
			{book: {
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}}
		];


		self.editar = function (indice){
			self.indiceEmUso = indice;
			self.novoLivro = angular.copy(self.db[indice].book);
			$scope.modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'static/editar.html',
		      controller: 'LivrariaController',
		      size: 'md',
		      scope: $scope
    		});
    		
    		$scope.modalInstance.result.then(function (selectedItem) {
		      var livroAtualizado = {book:selectedItem};
		      livroAtualizado.book.comentarios = angular.copy(self.db[self.indiceEmUso].book.comentarios);
		      livroAtualizado.book.autores = angular.copy([selectedItem.autores]);
		      
		      self.update(livroAtualizado, self.db[self.indiceEmUso].book.id);
		      self.db[self.indiceEmUso] = angular.copy(livroAtualizado);
		    }, function () {
		      console.log('Modal dismissed at: ' + new Date());
		    });
		};

		self.criar = function (indice){
			//self.novoLivro = self.db[indice];
			$scope.modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'static/editar.html',
		      controller: 'LivrariaController',
		      size: 'md',
		      scope: $scope
    		});
    		
    		$scope.modalInstance.result.then(function (selectedItem) {
		      self.db[indice] = selectedItem;
		    }, function () {
		      console.log('Modal dismissed at: ' + new Date());
		    });
		};

		self.carrinhoModal = function (indice){
			$scope.modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'static/carrinho.html',
		      controller: 'LivrariaController',
		      size: 'lg',
		      scope: $scope
    		});
    		
    		$scope.modalInstance.result.then(function (selectedItem) {
		    }, function () {
		      console.log('Modal dismissed at: ' + new Date());
		    });
		};

		$scope.ok = function () {
			$scope.modalInstance.close(self.novoLivro);
		};

		$scope.cancel = function () {
			$scope.modalInstance.dismiss('cancel');
		};

		this.save = function() {
			self.novoLivro.autores = [self.novoLivro.autores];
			self.novoLivro.comentarios = []; 

			$http.post("/book", self.novoLivro)
			.then(function(response) {
				alert("Livro registrado com sucesso.");
				self.db.push(angular.copy(self.novoLivro));
				$scope.cancel();
			},
			function(error){
				alert("Nao foi possivel salvar o livro.")
			});
		};
		
		this.update = function (livroPraAtualizar, id) {
			var livro = livroPraAtualizar ||  self.novoLivro;
			var chave = id || livro.book.id;

			$http.put("/book/" + chave, livro.book)
			.then(function(response) {
				alert("Livro atualizado com sucesso.");
			},
			function(error){
				alert("Nao foi possivel atualizar o livro.")
			});
		};	

		this.getBook = function (titulo) {
			$http.get("/book/" + self.novoLivro.titulo)
			.then(function(response) {
				self.novoLivro = response.data;
			},
			function(error){
				alert("Nao foi possivel recuperar o livro " + self.novoLivro.titulo + ".")
			});
		};  

		this.getBooks = function () {
			$http.get("/book")
			.then(function(response) {
				self.db = response.data;

				for (var i = 0; i < self.ddb.length; i++) {
					self.db.push(self.ddb[i]);
				};		
			},
			function(error){
				alert("Nao foi possivel recuperar a livraria.");
			});
		};

		this.comentar = function(indice){
			if (self.db[indice].book.comentarios == undefined){
				self.db[indice].book.comentarios = [];
			}
			self.db[indice].book.comentarios.push(self.comentario[indice]);
			self.update(self.db[indice]);
			self.comentario[indice] = "";
		};

		this.addAoCarrinho = function(indice){
			self.carrinho.push(angular.copy(self.db[indice].book));
			self.total += self.db[indice].book.preco;
			/*
			var id = self.db[indice].id;
			$http.put("/carrinho", {"livro":id})
			.then(function(response) {
				alert("Livro adicionado com sucesso no seu carrinho de compras.");
			},
			function(error){
				alert("Não foi possível adicionar o livro ao seu carrinho de compras.")
			});*/
		}

		this.getCarrinho = function (){
			$http.get("/carrinho")
			.then(function(response) {
				self.carrinho = response.data;
			},
			function(error){
			});
		};

		this.reset = function (){
			self.db = angular.copy(self.ddb);
			self.getCarrinho();
		};

		(function main(){
			console.log($scope);
			self.getBooks();
		})();
	}]);
})();