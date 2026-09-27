
    // Replace URL with your actual API endpoint
    fetch(`https://healthyeluru.elurucoders.online/api/users/address?usernumber=9440878876`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Display formatted JSON string inside the div
        document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => {
        // Display error message if the fetch fails
        document.getElementById('output').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      });
 