const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// Endpoint to handle the registration POST request
app.post('/registration', async (req, res) => {
  const { name, grade1, grade2, grade3 } = req.body;

  console.log('Received data:');
  console.log('Name:', name);
  console.log('Grade 1:', grade1);
  console.log('Grade 2:', grade2);
  console.log('Grade 3:', grade3);

  const data = `Name: ${name}\nGrade 1: ${grade1}\nGrade 2: ${grade2}\nGrade 3: ${grade3}\n\n`;

  try {
    await fs.promises.appendFile('registration.txt', data);
    console.log('Data written to file');
  } catch (err) {
    console.error('Error writing to file:', err);
  }

  if (name === undefined || grade1 === undefined || grade2 === undefined || grade3 === undefined) {
    res.status(400).json({ error: 'Incomplete form data' });
  } else {
    res.status(200).json({ message: 'Registration successful' });
  }
});

module.exports = app;
