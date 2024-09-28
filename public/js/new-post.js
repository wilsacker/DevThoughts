document.addEventListener('DOMContentLoaded', () => {
  const newPostForm = document.querySelector('#new-post-form');

  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // This line is critical!

      const title = document.querySelector('#title').value.trim();
      const content = document.querySelector('#content').value.trim();

      if (title && content) {
        const response = await fetch('/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          console.error('Failed to create post:', await response.json());
          alert('Failed to create post');
        }
      } else {
        alert('Both title and content are required');
      }
    });
  }
});