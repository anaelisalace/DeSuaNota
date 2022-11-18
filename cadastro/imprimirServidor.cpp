#include "tipos.h"

void imprimirServidor (Servidor s){
	//imprimirPessoa(s.pessoa);
	printf ("\n Servidor(a)        : %s", s.pessoa.nome);
	printf (" CPF		    : %d", s.pessoa.cpf);
	printf ("\n Nota		    : %d", s.nota);
	printf ("\n Data de Contratacao: ", s.dataContratacao);
	imprimirData(s.dataContratacao);
}
