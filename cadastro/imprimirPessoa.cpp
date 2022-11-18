#include "tipos.h"

void imprimirPessoa (Pessoa p){
	printf ("\nNome: %s", p.nome);
	printf ("CPF: %d", p.cpf);
	printf ("\nData de nasc.: ");
	imprimirData(p.dataNas);
	imprimirEndereco(p.end);
	imprimirContrato(p.contr);
}
