const request = require('supertest');
const app = require('../src/app'); 

describe('User API', () => {
  describe('GET /users', () => {
    it('should return all users', async () => {
      const res = await request(app).get('/users');

      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]).toHaveProperty('email');
    });
  });


  describe('POST /users', () => {
    it('should create a new user', async () => {
     
      const newUser = { name: 'Charlie', email: 'charlie@example.com' };

      
      const res = await request(app)
        .post('/users')
        .send(newUser)
        .set('Accept', 'application/json');

    
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toEqual(newUser.name);
      expect(res.body.email).toEqual(newUser.email);
    });

    it('should return 400 if name or email is missing', async () => {
      
      const incompleteUser = { name: 'David' }; 

    
      const res = await request(app)
        .post('/users')
        .send(incompleteUser)
        .set('Accept', 'application/json');

     
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Name and email are required');
    });
  });
});