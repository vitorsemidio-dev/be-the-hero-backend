const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
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
