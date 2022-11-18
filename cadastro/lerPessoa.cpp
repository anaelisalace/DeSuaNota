#include "tipos.h"

Pessoa lerPessoa (){
	Pessoa p;
	
	printf ("\n Nome: ");
	fgets (p.nome, 49, stdin);
	printf ("\n CPF: ");
	scanf ("%d", &p.cpf);
	printf ("\n Data de nascimento: ");
	p.dataNas = lerData();
	p.contr = lerContrato();
	p.end = lerEndereco();
	
	return p;
}
