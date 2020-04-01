<p align="center">
  <img src="./.github/logo.svg" width="300px"/>
</p>

<p align="center">
  <img src="./.github/jest.svg">
  <img src="./.github/node.svg">
  <img src="./.github/github.svg">
  <img src="./.github/visual_studio_code.svg">
</p>

# Semana Omnistack 11

**Be The Hero** é uma aplicação que visa conectar ONG's que precisam de ajuda e pessoas dispostas a ajudar. Através da interface web a ONG's cadastra seus dados e adiciona informações sobre os casos. E no app mobile, as pessoas podem entrar em contato com as instituições através de e-mail ou whatsapp.


## ✋🏻 Be The Hero Web e Mobile 

* [Be The Hero Web](https://github.com/vitorsemidio-dev/be-the-hero-web) 
* [Be The Hero Mobile](https://github.com/vitorsemidio-dev/be-the-hero-mobile) 


## 🚀 Como executar o projeto

1. Clone este repositório através do comando `git clone git@github.com:vitorsemidio-dev/be-the-hero-backend.git`
2. Troque para o diretório do projeto
3. Rode `yarn` ou `npm install` para instalar todas as dependências
4. Rode `yarn start` ou `npm start` para iniciar a aplicação


## 🎓 Aprendizado

```
  ├── sqlite
  ├── jest
  ├── celebrate
  └── knex
```

1.  **`sqlite`**: Banco de dados utilizado para armazenar os dados da aplicação. Para criação ou alteração da estrutura da tabelas são utilizados *migrations*

2.  **`knex`**: É um criador de query SQL para alguns banco de dados, como por exemplo: Postgres, MySQL, SQLite3. Possui um design flexível e portável para usá-lo com diferentes bancos.

3.  **`jest`**: É um Framework Web voltado para testes automatizados. Com ele é possível criar vários cenários de testes conforme e necessidade de sua aplicação;

4.  **`celebrate`**: É uma biblioteca que nos permite fazer validações sobre dados que nossas rotas recebem. Validar se os campos necessários foram informados e/ou se estão com a tipagem correta antes de passar para os controllers;

---

### **1. Knex e SQLite3**

> Comandos com knex

  ```
  npx knex migrate:make nome_migration
  npx knex migrate:latest
  ```

> Estrutura de uma tabela

```js
exports.up = function(knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
```

Função **up** é responsável por criar a tabela. Ao rodar o comando `npx knex migrate:latest` ele executa todas as funções **up** das migrations criadas.


---

### **2. Celebrate**

Antes de passar a requisição para o controller, celebrate faz uma validação, mais ou menos como se fosse um middleware. No exemplo abaixo foi uma das validações feitas no projeto. Além de definir a tipagem do campo, também podemos checar se no dentro de um intervalo desejado, entre outras abordagens.

```js
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required().min(1)
  }),
}), IncidentController.store);

```

---

### **3. Jest**

Arquivo: `generateUniqueId.js`
```js
const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});

```

Arquivo: `generateUniqueId.spec.js`

```js
const crypto = require('crypto');

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}
```

Teste unitários consistem em testar uma funcionalidade específica do sistema. Nesse caso, a função *generateUniqueId* possui a responsabilidade de gerar um Id único para ONG na hora do cadastro com as seguintes características: hexadecimal e em forma de string com tamanho 8.
