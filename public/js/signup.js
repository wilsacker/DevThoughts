document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value.trim();

      if (username && password) {
        const response = await fetch('/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up');
        }
      }
    });
  }
});