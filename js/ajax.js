$(document).ready(function(){
	$('#tabela').empty(); // Limpando a tabela
	$.ajax({
		type:'post', 		//Definimos o método HTTP usado
		dataType: 'json', 	//Definimos o tipo de retorno
		url: 'getDados.php',//Definimos o arquivo onde serão buscados os dados
		sucess: function(dados){
			for(var i=0; dados.length>i;i++){
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td>')+dados[i].id+'</td><td>'+dados[i].nome+'</td><td>'+dados[i].email+'</td></tr>');
			}
		} 
	});
});