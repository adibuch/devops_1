const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  test1: {
    type: Number,
    required: true
  },
  test2: {
    type: Number,
    required: true
  },
  test3: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
