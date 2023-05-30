const request = require('supertest');
const app = require('../src/server'); // Replace 'your-app-file' with the actual file name
const Student = require('../models/users')
// describe("Connection", () => {
//   beforeAll(async () => {
//     await mongoose.connect(dbURI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//     })
//   });

//   test("Retrieve student by Id", async () => {
//     const id = "646a1dc5d6a25fe72e4c2028";
//     const student =  await Student.getArticlebyId(id);
//     expect(article.name).toBe("John Doe");
//   });

//   afterAll(async done => {
//     mongoose.disconnect();
//     done();
// });

// });

describe('Test your Express app', () => {
  // Test the root endpoint
  it('should return the index page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    // Add more assertions if necessary
  });

  // Test the registration endpoint
  it('should register a student successfully', async () => {
    const studentData = {
      name: 'John Doe',
      grade1: 90,
      grade2: 85,
      grade3: 95
    };

    const response = await request(app)
      .post('/registration')
      .send(studentData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Registration successful');
    // Add more assertions if necessary
  }, 10000);

  // Test the registration endpoint with incomplete form data
  it('should return an error for incomplete form data', async () => {
    const incompleteData = {
      name: 'John Doe',
      grade1: 90
      // Missing grade2 and grade3 intentionally
    };

    const response = await request(app)
      .post('/registration')
      .send(incompleteData);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Incomplete form data');
    // Add more assertions if necessary
  });
});
