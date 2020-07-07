const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
	const blogs = [
		{ title: "title one", snippet: 'blog snippet one' },
		{ title: "title two", snippet: 'blog snippet two' },
		{ title: "title three", snippet: 'blog snippet three' }
	];
	res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
	res.render('create', { title: 'Create a new blog' });
})

app.use((req, res) => {
	res.status(404).render('404', {title: '404 not found'});
});
