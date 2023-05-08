const app = require('./srever')

const mongoose = require('mongoose');
const User = require('../models/users');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`);
}); 