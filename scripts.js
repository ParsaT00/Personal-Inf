document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const newPostForm = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('posts');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Handle login logic here
            console.log('Login attempt:', username, password);

            // Redirect to index page after login
            window.location.href = 'personal.html';
        });
    }

    if (newPostForm) {
        newPostForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            // Handle new post submission logic here
            console.log('New post:', title, content);

            // Display the new post
            const post = document.createElement('div');
            post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            postsContainer.appendChild(post);

            // Clear form
            newPostForm.reset();
        });
    }
});
