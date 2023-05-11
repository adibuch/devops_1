// Add an event listener to the form submit event
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form values
  var name = document.getElementById('name').value;
  var grade1 = parseFloat(document.getElementById('grade1').value);
  var grade2 = parseFloat(document.getElementById('grade2').value);
  var grade3 = parseFloat(document.getElementById('grade3').value);
  const errorMsg = document.getElementById('error-msg');

  // Check if grades are within the valid range
  if (isValidGrade(grade1) && isValidGrade(grade2) && isValidGrade(grade3)) {
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
          errorMsg.textContent = '';
          showMessage();
        } else {
          // Handle the error response from the server
          console.log('Registration failed');
        }
      })
      .catch(function(error) {
        // Handle any network or other errors
        console.error('Error:', error);
      });
  } else {
    // Display an error message to the user
    errorMsg.textContent = 'Grade must be between 0 - 100 ';
  }
});

// Helper function to check if a grade is within the valid range
function isValidGrade(grade) {
  return grade >= 0 && grade <= 100;
}

function showMessage() {
  alert("Your details are saved.");
}
