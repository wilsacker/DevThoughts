document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const comment_text = document.querySelector('#comment-text').value.trim();
      const post_id = document.querySelector('#post-id').value;
      console.log("Comment Text: ", comment_text);
      console.log("Post ID: ", post_id);

      if (comment_text) {
        const response = await fetch('/comments', {
          method: 'POST',
          body: JSON.stringify({ comment_text, post_id }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.reload();
        } else {
          console.error('Failed to add comment', await response.json());
          alert('Failed to add comment');
        }
      }
    });
  }
});