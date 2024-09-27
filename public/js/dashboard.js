document.addEventListener('DOMContentLoaded', () => {
    const editPostBtns = document.querySelectorAll('.edit-post-btn');
    const deletePostBtns = document.querySelectorAll('.delete-post-btn');
  
    // Edit post handler
    editPostBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        const newTitle = prompt('Enter new title:');
        const newContent = prompt('Enter new content:');
  
        if (newTitle && newContent) {
          const response = await fetch(`/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title: newTitle, content: newContent }),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update post');
          }
        }
      });
    });
  
    // Delete post handler
    deletePostBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
  
        const response = await fetch(`/posts/${id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post');
        }
      });
    });
  });