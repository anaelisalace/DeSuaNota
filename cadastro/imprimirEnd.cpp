#include "tipos.h"

void imprimirEndereco (Endereco end){
	printf ("Endereco: \n");
	printf ("Rua: %s", end.rua);
	printf ("Bairro: %s", end.bairro);
	printf ("Cidade: %s", end.cidade);
	printf ("Pais: %s", end.pais);
	printf ("Numero: %s\n", end.num);
	printf ("CEP: %s\n", end.cep);
}
