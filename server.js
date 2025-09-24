const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/posts', (req, res) => {
    const postsData = require('./data/posts.json');
    res.render('blog', {posts: postsData});
});

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`)
});

