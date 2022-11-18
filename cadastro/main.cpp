#include "tipos.h"

int main (){
	
	int opcao;
			
	do {
		system ("cls");
		printf ("\n****************************");
		printf ("\n  Bem Vindo ao DE UMA NOTA");
		printf ("\n****************************");
		//printf ("\n 1 - Tabela Hash por Numero");
		printf ("\n 1 - Inserir Servidor");
		printf ("\n 0 - Sair");
		printf ("\n Escolha uma opcao: ");
		scanf ("%d", &opcao);
		getchar();
		switch (opcao){
			case 1: 
				menuTabelaHashString ();
				break;
			default:
				printf ("Opcao invalida.\n");
		}
	}while (opcao != 0);	
		
	return 0;
}
