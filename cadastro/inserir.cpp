#include "tipos.h"

int inserir (Pessoa t[]) {
	Pessoa p = lerPessoa();
	int id = funcaoHash(p.cpf);
	
	while (t[id].cpf != 0){
		id = funcaoHash(id + 1);
	}
	t[id] = p;
}
