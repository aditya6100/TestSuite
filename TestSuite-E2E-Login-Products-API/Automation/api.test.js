// api.test.js

const request = require('supertest');

// Base URL of the API
const baseURL = 'http://localhost:3000'; // Replace with your actual API base URL

describe('Products API', () => {
  let token;

  // Before running the tests, log in and get the authentication token
  beforeAll(async () => {
    const response = await request(baseURL)
      .post('/auth/login')
      .send({
        username: 'admin', // Replace with a valid admin username
        password: 'password123', // Replace with a valid admin password
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.access_token).toBeDefined();
    token = response.body.access_token;
  });

  // Test suite for GET /products
  describe('GET /products', () => {
    it('should return a list of products', async () => {
      const response = await request(baseURL).get('/products');
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  // Test suite for POST /products (Admin only)
  describe('POST /products', () => {
    it('should create a new product when authenticated as admin', async () => {
      const newProduct = {
        name: 'New Test Product',
        price: 125,
        description: 'This is a test product.',
      };

      const response = await request(baseURL)
        .post('/products')
        .set('Authorization', `Bearer ${token}`)
        .send(newProduct);

      expect(response.statusCode).toBe(201);
      expect(response.body.name).toBe(newProduct.name);
    });

    it('should return 401 Unauthorized when not authenticated', async () => {
      const newProduct = {
        name: 'Unauthorized Product',
        price: 10,
      };

      const response = await request(baseURL)
        .post('/products')
        .send(newProduct);

      expect(response.statusCode).toBe(401);
    });
  });

  // Test suite for PATCH /products/:id (Admin only)
  describe('PATCH /products/:id', () => {
    // Assuming a product with ID 1 exists
    const productId = 1;

    it('should update a product when authenticated as admin', async () => {
      const updatedData = {
        price: 199.99,
      };

      const response = await request(baseURL)
        .patch(`/products/${productId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedData);

      expect(response.statusCode).toBe(200);
      expect(response.body.price).toBe(updatedData.price);
    });

    it('should return 404 Not Found for a non-existent product', async () => {
      const nonExistentProductId = 9999;
      const updatedData = {
        price: 200,
      };

      const response = await request(baseURL)
        .patch(`/products/${nonExistentProductId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(updatedData);

      expect(response.statusCode).toBe(404);
    });
  });
});
