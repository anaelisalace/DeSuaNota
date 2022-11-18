#include "tipos.h"

Endereco lerEndereco (){
	Endereco end;
	
	printf ("\n Rua: ");
	fgets (end.rua, 49, stdin);
	printf ("\n Bairro: ");
	fgets (end.bairro, 49, stdin);
	printf ("\n Cidade: ");
	fgets (end.cidade, 49, stdin);
	printf ("\n Pais: ");
	fgets (end.pais, 49, stdin);
	printf ("\n Numero: ");
	gets (end.num);
	printf ("\n CEP: ");
	gets (end.cep);
	getchar ();
	
	return end;	
}
