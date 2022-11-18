#include "tipos.h"

void menuTabelaHashString (){
	
	int opcao, retorno;
	char nomeServidor[50];
	Servidor *busca, tabela[TAM];
	
	inicializarTabelaString(tabela);
	
	do {
		system ("cls");
		printf ("\n****************************");
		printf ("\n     Cadastrar Servidor");
		printf ("\n****************************");
		printf ("\n 1 - Inserir Servidor");
		printf ("\n 2 - Buscar Servidor");
		printf ("\n 3 - Listar Servidor");
		printf ("\n 0 - Sair");
		printf ("\n Escolha uma opcao: ");
		scanf ("%d", &opcao);
		getchar();
		switch (opcao){
			case 1: 
				inserirString(tabela);
				break;
			case 2: 
				printf  ("\n Nome do Servidor: ");
				fgets (nomeServidor, 49, stdin);
				busca = buscaPorString(tabela, nomeServidor);
				if (buscar != NULL){
					printf ("\n Servidor encontrado: \n------------------------------------");
					imprimirServidor(*busca);
					getchar ();
				} else {
					printf ("\n Servidor nao encontrado.\n");
					getchar ();
				}
				break;
			case 3:
				imprimirHashString(tabela);
				break;
			default:
				printf ("Opcao invalida.\n");
		}
	}while (opcao != 0);
	
}
