(function () { 
	livrariaModule = angular.module("livraria", ['ui.bootstrap']);

	livrariaModule.controller("LivrariaController", ['$scope', '$uibModal', '$http', '$httpParamSerializerJQLike', function ($scope, $uibModal, $http, $httpParamSerializerJQLike){
		var self = this;

		self.novoLivro;

		self.comentario = [];
		
		self.ddb = [
			{
				titulo: "O mínimo que você precisa saber para não ser um idiota",
				autores: ["Olavo de Carvalho"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://veja.abril.com.br/blog/reinaldo/files/2013/09/capa-do-livro-olavo.jpg",
				preco: 45.50,
				comentarios: ['bom', 'inteligente', 'incrivel']
			},
			{
				titulo: "O Senhor dos aneis - A sociedade do anel (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://imgc.allpostersimages.com/images/P-473-488-90/55/5580/F13VG00Z/posters/o-senhor-dos-aneis-1-a-sociedade-do-anel.jpg",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O Senhor dos aneis - As Duas Torres (segundo livro)         .",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://portal.julund.com.br/wp-content/uploads/2014/01/LOTR-duas-torres.jpg",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O Senhor dos aneis - O retorno do Rei (terceiro livro)     ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			},
			{
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "static/book.png",
				preco: 45.50,
				comentarios: []
			}
		];


		self.editar = function (indice){
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
				console.log(self.db)
				$scope.cancel();
			},
			function(error){
				alert("Nao foi possivel salvar o livro.")
			});
		};
		
		this.update = function (livroPraAtualizar) {
			var livro = livroPraAtualizar ||  self.novoLivro;
			$http.put("/book/" + livro.book.titulo, livro.book)
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
				alert("Nao foi recuperar o livro " + self.novoLivro.titulo + ".")
			});
		};  

		this.getBooks = function () {
			$http.get("/book")
			.then(function(response) {
				self.db = response.data;
			},
			function(error){
				alert("Nao foi recuperar a livraria.");
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

		(function main(){
			self.getBooks();
		})();
	}]);
})();