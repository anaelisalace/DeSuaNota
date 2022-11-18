#include "tipos.h"

int funcaoHashString (char string[]){
	
	int tamanhoString = strlen(string);
	unsigned int hash = 0;
	
	for (int i = 0; i < tamanhoString; i++){
		hash += string[i] * (i + 1);
	} 
	return hash % TAM;
}
