const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Student = require('../models/users');
const mongoose = require('mongoose');
const fs = require('fs');
const port = process.env.PORT || 3000;

const dbURI = 'mongodb+srv://dev:0123456789@devops.x1un1tw.mongodb.net/Devops?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      
    });
  })
  .catch(err => {
    console.log(err);
  });

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

  if (name === undefined || grade1 === undefined || grade2 === undefined || grade3 === undefined) {
    return res.status(400).json({ error: 'Incomplete form data' });
  }

  try {
    const student = new Student({
      name: name,
      test1: grade1,
      test2: grade2,
      test3: grade3
      
    });

    await student.save();

  

    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Error saving data to MongoDB:', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});


module.exports = app;
