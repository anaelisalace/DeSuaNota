#include "tipos.h"

Data lerData (){
	Data d;
	printf ("\n Digite a data no formato dd mm aaaa: ");
	scanf ("%d%d%d", &d.dia, &d.mes, &d.ano);
	getchar(); ///Não entendi isso
	return d;
}
