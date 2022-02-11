const client = require('../connect_db');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

test('Products are returned as json', async () => {
    await api
      .get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 100000)

describe('When the product does not have any batch sizes to select', () => {
  test('Batch size equal to 1', async() => {
    const data = await api.get('/api/products');
    const result = JSON.parse(data.text)
    expect(result[4].batch_quantity).toBe(1);
  });

  test('Generated batch size code with format BS_GENERATED_{product_code} & batch_size equal to 1', async() => {
    const data = await api.get('/api/products');
    const result = JSON.parse(data.text)
    expect(result[3].batch_size[0]).toEqual({
        batch_size_code: "BS_GENERATED_P4",
        size: 1
      });
  });
});

afterAll(()=> {
    client.end();
});
