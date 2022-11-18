#include "tipos.h"

void imprimirHashString (Servidor t[]){
	
	for (int i = 0; i < TAM; i++){
		printf ("%d\n", i);
		if (strcmp(t[i].pessoa.nome, "") == 0){
			printf ("Posicao vazia!!!");	
		}else {
			imprimirServidor(t[i]);	
		}
		printf ("\n----------------------------------\n");
	}
	getchar ();
}
