#include "tipos.h"

void inserirString (Servidor t[]){
	
	Servidor s = lerServidor();
	
	int id = funcaoHashString(s.pessoa.nome);
	
	while (strlen(t[id].pessoa.nome) > 0){
		id = funcaoHash(id + 1);
	}
	t[id] = s;
}
