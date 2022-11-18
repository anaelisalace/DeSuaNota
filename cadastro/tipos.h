#ifndef _tipos_
#define _tipos_

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define TAM 15


typedef struct {
	int dia, mes, ano;	
}Data;

typedef struct {
	char rua[50];
	char bairro[50];
	char cidade[50];
	char pais[50];
	char num[50];
	char cep[50];
}Endereco;

typedef struct {
	int codigo;
	Data dataAss;
	char cargo[50];
	float salario;
}Contrato;

typedef struct {
	char nome[50];
	int cpf;
	Data dataNas;
	Endereco end;
	Contrato contr;
}Pessoa;

typedef struct {
	Pessoa pessoa;
	int nota;
	Data dataContratacao;
}Servidor;

void imprimirData (Data data);
void imprimirEndereco (Endereco end);
void imprimirContrato (Contrato c);
void imprimirPessoa (Pessoa p);
Data lerData ();
Endereco lerEndereco ();
Contrato lerContrato ();
Pessoa lerPessoa ();

void inicializarTabelaString (Servidor t[]);
int funcaoHashString (char string[]);
Servidor lerServidor ();
void inserirString (Servidor t[]);
Servidor *buscaPorString (Servidor t[], char chave[]);
void menuTabelaHashString ();
void imprimirServidor (Servidor s);
void imprimirHashString (Servidor t[]);

#endif
