// Get the form element
const form = document.getElementById('contactForm');

// Handle form submission
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const address = document.getElementById('address').value;

  // API endpoint
  const apiUrl = 'https://example.com/api/submit'; // Replace with your actual API endpoint

  try {
    // Make an API call
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phoneNumber, address }),
    });

    // Handle the API response
    if (response.ok) {
      const data = await response.json();
      alert('Form submitted successfully! Response: ' + JSON.stringify(data));
    } else {
      alert('Failed to submit form: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form.');
  }
});
