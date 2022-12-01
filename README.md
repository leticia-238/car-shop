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

- `node v16` e `docker`
  
  ou
- [`docker compose >=v2`](https://docs.docker.com/compose/install/)

### Execute os seguintes passos no terminal

1. Clone o projeto:

    ```bash
    git clone git@github.com:leticia-238/car-shop.git`
    ```

2. Entre na pasta do repositório clonado:

    ```bash
    cd car-shop`
    ```

3. Inicie o servidor:
    <details><summary>Para iniciar o servidor com o docker-compose:</summary>

    ```bash
    npm run compose:up
    ```

    > Este comando irá iniciar os containers da aplicação e do banco de dados de acordo com as configurações do arquivo [docker-compose.yml](https://github.com/leticia-238/car-shop/blob/main/docker-compose.yml)

    </details>

    <details><summary>Para iniciar o servidor com o node e o mongodb com docker:</summary>

    - Caso não tenha o MongoDB instalado em sua máquina rode o seguinte comando:

    ```bash
    docker run --name car_shop_db -p 27017:27017 -d mongo:5.0.7
    ```

    - Instale as dependências e inicie o servidor:

    ```bash
    npm install && npm start
    ```

    </details>
