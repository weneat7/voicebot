// Get the form and message elements
const form = document.getElementById('contactForm');
const message = document.getElementById('message');

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const address = document.getElementById('address').value;

  // API endpoint
  const apiUrl = `https://talk-track-flow.qac24svc.dev/api/v1/event/test`;

  try {
    // Make the POST request
    const response = await fetch(`${apiUrl}?Name=${encodeURIComponent(name)}&Phone=${encodeURIComponent(phoneNumber)}&Address=${encodeURIComponent(address)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    // Handle the response
    const result = await response.json();
    document.getElementById("message").textContent = "Success: " + JSON.stringify(result);
    document.getElementById("message").style.color = "green";
    // Handle response
    if (response.ok) {
      const data = await response.json();
      message.innerHTML = `<span style="color: green;">Form submitted successfully: ${JSON.stringify(data)}</span>`;
    } else {
      message.innerHTML = `<span style="color: red;">Failed to submit form: ${response.statusText}</span>`;
    }
  } catch (error) {
    console.error('Error:', error);
    message.innerHTML = `<span style="color: red;">An error occurred while submitting the form.</span>`;
  }
});
