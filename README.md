# Be The Hero

## Criação Migration ONG's

Para criar o arquivo de migração, rode o comando a seguir **npx knex migrate:make *nome_migration***. As tabelas criadas neste projeto foram:

```
npx knex migrate:make create_ongs
npx knex migrate:make create_incidents
```

Após ter o arquivo criado e as implementações das funções **up** e **down** da migration feitas, rode o comando a seguir para executar a migration:

```
npx knex migrate:latest
```

## Implementação das Tabelas

### ONG's

```js
exports.up = function(knex) {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
```

### Incidents

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
