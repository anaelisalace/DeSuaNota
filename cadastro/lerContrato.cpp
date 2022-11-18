#include "tipos.h"

Contrato lerContrato (){
	Contrato c;
	
	printf ("\n Codigo do contrato: ");
	scanf ("%d", &c.codigo);
	printf ("\n Data de assinatura: ");
	c.dataAss = lerData();
	printf ("\n Cargo: ");
	gets (c.cargo);
	printf ("\n Salario: R$ ");
	scanf ("%f", &c.salario);
	getchar();
	
	return c;	
}
