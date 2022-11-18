#include "tipos.h"

void inicializarTabelaString (Servidor t[]){

	for (int i = 0; i < TAM; i++){
		strcpy (t[i].pessoa.nome, "");
	}
}
