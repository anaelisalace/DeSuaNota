#include "tipos.h"

void imprimirContrato (Contrato c){
	printf ("Contrato: %d\n", c.codigo);
	printf ("Cargo: %s\n", c.cargo);
	printf ("Salario: R$%.2f\n", c.salario);
	printf ("Data de ad: ");
	imprimirData (c.dataAss);
}
