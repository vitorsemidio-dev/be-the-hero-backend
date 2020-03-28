const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "abababa",
      email: "contato@valido.com",
      whatsapp: "1100000000",
      city: "Rio de Janeiro",
      uf: "RJ",
    });

    console.log(response.body);
  });
});