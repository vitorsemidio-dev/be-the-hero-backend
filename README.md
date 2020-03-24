# Be The Hero

## Criação Migration ONG's

Para criar o arquivo de migração, rode o comando a seguir:

```
npx knex migrate:make create_ongs
```

Após ter o arquivo criado e as implementações das funções **up** e **down** da migration feitas, rode o comando a seguir para executar a migration:

```
npx knex migrate:latest
```
