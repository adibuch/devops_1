const { JSDOM } = require('jsdom');
const fetchMock = require('jest-fetch-mock');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const formMock = document.createElement('form');
formMock.id = 'registrationForm';
document.body.appendChild(formMock);

const inputMocks = {
    name: document.createElement('input'),
    grade1: document.createElement('input'),
    grade2: document.createElement('input'),
    grade3: document.createElement('input'),
};
inputMocks.name.id = 'name';
inputMocks.grade1.id = 'grade1';
inputMocks.grade2.id = 'grade2';
inputMocks.grade3.id = 'grade3';

Object.values(inputMocks).forEach(input => {
    formMock.appendChild(input);
});

const errorMsgMock = document.createElement('p');
errorMsgMock.id = 'error-msg';
document.body.appendChild(errorMsgMock);

const setInputValue = (inputId, value) => {
    inputMocks[inputId].value = value;
};

// Import the script file
const script = require('../public/script.js');

describe('Registration form', () => {
    beforeEach(() => {
      Object.values(inputMocks).forEach(input => {
        input.value = '';
      });
      errorMsgMock.textContent = '';
    });

    it('should display an error message when any grade is invalid', async () => {
      setInputValue('name', 'John Doe');
      setInputValue('grade1', '90');
      setInputValue('grade2', '101'); // Invalid grade
      setInputValue('grade3', '95');

      // Call the form submit handler
      script.handleFormSubmit(new Event('submit'));

      // Check the expected behavior
      expect(fetchMock).not.toHaveBeenCalled();
      expect(errorMsgMock.textContent).toBe('Grade must be between 0 - 100');
    });

    // Add more tests for different scenarios as needed
});
