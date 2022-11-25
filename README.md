<h1 align="center">
  :car::pickup_truck: Car Shop :blue_car:
</h1>

## Sobre o projeto

***Projeto realizado durante módulo de Backend na Trybe, entre 14 de Setembro e 21 de Setembro de 2022.***

O Car Shop é uma aplicação backend para o gerenciamento de uma concessionária de veículos.

Nesse projeto foram aplicados os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD utilizando o banco de dados MongoDB.

O arquivo src/models/connection.ts e o código dentro do arquivo de src/connections.ts foram desenvolvidos pela equipe da [Trybe](https://www.betrybe.com/), escola de programação onde eu realizei este projeto. Toda as outras implementações no back-end foram realizadas por mim.

## Tecnologias e Ferramentas utilizadas

**Banco de Dados**: MongoDB

**Back-end**: Node.js, Typescript, Express.js, Mongoose

**Testes**: Mocha, Chai, Sinon

**Containerização dos serviços**: Docker, Docker Compose

## Instruções para a instalação

### Pré-requisitos para iniciar a aplicação no computador

- `docker`
- [`docker compose >=2`](https://docs.docker.com/compose/install/)

### Execute os seguintes passos no terminal

1. Clone o projeto: `git clone git@github.com:leticia-238/trybe-futebol-clube.git`

2. Entre na pasta do repositório clonado: `cd trybe-futebol-clube`

3. Inicialize o docker-compose: `npm run compose:up`

> Este comando irá iniciar os containers da aplicação e do banco de dados de acordo com as configurações do arquivo [docker-compose.yml](https://github.com/leticia-238/car-shop/blob/main/docker-compose.yml)

4. Inicie a aplicação:

- Em modo de desenvolvimento: `npm run dev`

- Em modo de produção: `npm start`
