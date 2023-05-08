const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/users');

const port = process.env.PORT || 3000;

// connect to mongoDB
const dbURI = 'mongodb+srv://pm:1234567890@projectmanagement.srxmxoq.mongodb.net/project_management?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result) => app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
    
})).catch((err) => console.log(err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

// mongoose & mongo tests
app.get('/add-user', (req, res) => {
    const user = new User({
        name: 'new blog',
        id: 'about my new blog',
        age: 'more about my new blog',
    });
    user.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get('/all-blogs', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

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