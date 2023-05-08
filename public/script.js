// Add an event listener to the form submit event
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the form values
    var name = document.getElementById('name').value;
    var grade1 = parseFloat(document.getElementById('grade1').value);
    var grade2 = parseFloat(document.getElementById('grade2').value);
    var grade3 = parseFloat(document.getElementById('grade3').value);
  
    // Create an object with the form data
    var formData = {
      name: name,
      grade1: grade1,
      grade2: grade2,
      grade3: grade3
    };
  
    // Send the form data to the server using an HTTP POST request with fetch()
    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        // Handle the successful response from the server
        console.log('Registration successful');
      } else {
        // Handle the error response from the server
        console.log('Registration failed');
      }
    })
    .catch(function(error) {
      // Handle any network or other errors
      console.error('Error:', error);
    });
  });
  