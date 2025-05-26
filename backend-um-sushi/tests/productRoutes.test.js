const request = require('supertest');
const app = require('../src/app'); 

describe('Product API', () => {
  
  describe('GET /products', () => {
    it('should return all products', async () => {
      

      
      const res = await request(app).get('/products');

     
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]).toHaveProperty('price');
    });
  });

  
  describe('POST /products', () => {
    it('should create a new product', async () => {
      
      const newProduct = { name: 'Keyboard', price: 75 };

      const res = await request(app)
        .post('/products')
        .send(newProduct)
        .set('Accept', 'application/json');

      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toEqual(newProduct.name);
      expect(res.body.price).toEqual(newProduct.price);
    });

    it('should return 400 if name or price is missing', async () => {
      
      const incompleteProduct = { name: 'Monitor' }; 

      
      const res = await request(app)
        .post('/products')
        .send(incompleteProduct)
        .set('Accept', 'application/json');

      
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Name and price are required');
    });
  });
});