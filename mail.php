<?php

//pega os dados do $http do Angular
$meuPost = file_get_contents("php://input");

//para acessar os dados: $json.nome ou $Json.email e etc.
$json = json_decode( $meuPost );

// Aqui vc pode implementar o codigo para enviar o email via php.

//retorna os dados para o success do Angular
echo json_encode(array(

						"nome"=>$json->nome,
						"email"=>$json->email,
						"mensagem"=>$json->mensagem

					));