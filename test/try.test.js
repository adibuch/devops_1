
const request = require('supertest');
const app = require('../src/server');


describe("Test suite 1:",()=>{
    test("test 1: ",async()=>{
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
    test("test 2: ",async()=>{
        const res = await request(app).get('/1234')
        expect(res.statusCode).toEqual(404)
    })
})


describe('Registration endpoint', () => {
  test('should handle the registration POST request', async () => {
    const response = await request(app)
      .post('/registration')
      .send({
        name: 'John Doe',
        grade1: 90,
        grade2: 85,
        grade3: 95
      });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Registration successful' });
      // Add a delay to allow the file operation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));
  });


test('POST /registration with incomplete form data should return an error', async () => {
    const response = await request(app)
      .post('/registration')
      .send({
        name: 'John Doe',
        grade1: 90,
        // Missing grade2 and grade3
      });
  
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: 'Incomplete form data' });
    
  });
});



  