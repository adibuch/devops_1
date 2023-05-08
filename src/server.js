const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});
// Endpoint to handle the registration POST request
app.post('/registration', (req, res) => {
    // Access the form data sent in the request body
    const { name, grade1, grade2, grade3 } = req.body;
    // Log the received data
    console.log('Received data:');
    console.log('Name:', name);
    console.log('Grade 1:', grade1);
    console.log('Grade 2:', grade2);
    console.log('Grade 3:', grade3);
    // Perform any necessary processing or validation
    // ...
  
    // Return a response indicating the registration was successful
    res.status(200).json({ message: 'Registration successful' });
});
  
module.exports = app;