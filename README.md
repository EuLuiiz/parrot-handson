
![Logo](https://github.com/EuLuiiz/parrot-handson/blob/main/doc/logo%20horizontal%20colorido.png)




# Enunciado

A rede social Parrot é um sistema white label (Um modelo criado que pode ser reutilizado trocando a logo e marca), a plataforma permite que os usuários façam publicações que
ficam visíveis para toda comunidade.


## Funcionalidades

- Criação de usuário e postagens
- Atualizar dados de usuários e das postagens
- Listagem de um ou vários usuários e das postagens
- Login e autenticação
- Visualização de todas as postagens de um usuário


## Instalação

Para começar, execute o comando:

```bash
    npm i
```
    
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env (seguindo o exemplo disponibilizado)
#
Bancos de Dados: são as informações do seu banco de dados (o projeto usa o MySql)

Aplicação: informações que a API vai usar

Token: chave secreta para validar o token gerado de autenticação/autorização

## Iniciando

Depois que instalado e configurado, execute o comando:

`npm run start`

Ele vai criar um banco de dados (baseado na sua configuração), criar as tabelas já configuradas e inserir 20 usuários com 60 postagens dividias entre si aleatóriamente

#

E por fim execute o comando para iniciar a aplicação

`npm run debug`
## Documentação da API

A documentação pronta e explicada se encontra no [Postman](https://documenter.getpostman.com/view/24048036/2s8YCjDC1C)  

Caso o link não funcionar, na pasta 'docs' se encontra a coleção exportada


## Referência

O projeto foi construido junto com uma equipe do Front End

 - [Front End](https://github.com/JessicaArf/parrot)


## Autores

- [EuLuiiz](https://www.github.com/EuLuiiz)
- [Tiago Kochem](https://github.com/Tiagokochem)

