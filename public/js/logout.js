document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('#logout-button');
  
    if (logoutButton) {
      logoutButton.addEventListener('click', async (event) => {
        event.preventDefault();
  
        const response = await fetch('/users/logout', {
          method: 'POST',
        });
  
        if (response.ok) {
          document.location.replace('/login');  // Redirect to login page after logout
        } else {
          alert('Failed to log out');
        }
      });
    }
  });