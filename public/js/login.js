document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();

      if (username && password) {
        const response = await fetch('/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');  // Redirect to the dashboard after login
        } else {
          const errorMsg = await response.json();
          alert(`Failed to log in: ${errorMsg.message}`);
        }
      }
    });
  }
});