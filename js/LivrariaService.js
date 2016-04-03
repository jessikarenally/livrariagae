(function () { 
	var servicesModule = angular.module('livraria');

	servicesModule.service("LibraryService", function($http) {
		this.save = function() {
			$http.post("/book", self.db[0])
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

		this.get = function () {

		}  
	});
})();