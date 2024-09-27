document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();

      if (username && password) {
        try {
          const response = await fetch('/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/dashboard');  // Redirect after successful login
          } else {
            const errorMsg = await response.json();  // Get the error message
            alert(`Failed to log in: ${errorMsg.message || 'Unknown error'}`);
          }
        } catch (error) {
          alert('Failed to log in: An unexpected error occurred.');
          console.error('Login error:', error);  // Log any client-side errors
        }
      }
    });
  }
});