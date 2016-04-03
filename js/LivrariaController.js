(function () { 
	livrariaModule = angular.module("livraria", ['ui.bootstrap']);

	livrariaModule.controller("LivrariaController", ['$scope', '$uibModal', '$http', '$httpParamSerializerJQLike', function ($scope, $uibModal, $http, $httpParamSerializerJQLike){
		var self = this;

		self.novoLivro;
		
		self.db = [
			{
				titulo: "O mínimo que você precisa saber para não ser um idiota",
				autores: ["Olavo de Carvalho"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O Senhor dos aneis - A sociedade do anel (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O Senhor dos aneis - As Duas Torres (segundo livro)         .",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O Senhor dos aneis - O retorno do Rei (terceiro livro)     ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)         ",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit - Uma Jornada Inesperada (primeiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit - A Desolação de Smaug (segundo livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
			},
			{
				titulo: "O hobbit -  A Batalha dos Cinco Exércitos (terceiro livro)",
				autores: ["J. R. R. Tolkien"],
				descricao: "Escritos entre 1997 e 2013 e publicados em diferentes jornais e revistas do país, os 193 textos aqui selecionados esmiúçam os fatos do cotidiano – as notícias, o que nelas fica subentendido, ou que delas passa omitido – para afinal destrinchar, sem dó, a mentalidade brasileira e sua progressiva inclinação pelo torpor e pela incompreensão. Há tempos...",
				url_capa: "http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjanbmD3MPLAhXKgJAKHZbhD8QQjRwIBw&url=http%3A%2F%2Fveja.abril.com.br%2Fblog%2Freinaldo%2Fgeral%2Fo-minimo-que-voce-precisa-saber-para-nao-ser-um-idiota%2F&psig=AFQjCNF0C1AezPvlAHbHjwwRtYIvY88s6Q&ust=1458166594528311",
				preco: 45.50
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
			self.db.push(angular.copy(self.novoLivro));
			$http.post("/book", self.novoLivro)
			.then(function(response) {

				alert("Livro registrado com sucesso.");
				//self.db.add(livro)
			},
			function(error){
				alert("Nao foi possivel salvar o livro.")
			});
		}
		
		this.update = function () {

		}	

		this.getBook = function (titulo) {

		}  

		this.getBooks = function () {

		}
	}]);
})();