// Import the jsdom package
const jsdom = require('jsdom');

// Create a virtual DOM
const { JSDOM } = jsdom;
const { document } = new JSDOM('').window;

// Assign the document to the global object
global.document = document;
