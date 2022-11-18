#include "tipos.h"

Servidor *buscaPorString (Servidor t[], char chave[]){
	
	int id = funcaoHashString(chave);
	
	printf ("\n Indice gerado: %d\n", id);
	
	while (strlen(t[id].pessoa.nome) > 0){
		if (strcmp(t[id].pessoa.nome, chave) == 0){
			return &t[id];
		} else {
			id = funcaoHash(id + 1);
		}
	}
	return NULL;
}
