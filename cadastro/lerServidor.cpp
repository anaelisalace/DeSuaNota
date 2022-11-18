#include "tipos.h"

Servidor lerServidor (){
	Servidor s;
	
	printf ("\n Nome: ");
	fgets (s.pessoa.nome, 49, stdin);
	printf ("\n CPF: ");
	scanf ("%d", &s.pessoa.cpf);
	printf ("\n Nota: ");
	scanf ("%d", &s.nota);
	printf ("\n Data de Contratacao: ");
	s.dataContratacao = lerData();
	
	return s;
}
