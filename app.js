import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
import createmovieList from './views/movielist.js';
import createmovietemplate from './views/movie.js';
import createEducationList from './views/educationList.js';
import createEducationTemplate from './views/education.js';
import BOOKS_DATA from './data/data.js';
import MOVIES_DATA from './data/moviesdata.js';
import EDUCATION from './data/educationdata.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({ id, title, author });

  res.redirect('/books/' + id);
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);

  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
  BOOKS_DATA.splice(idx, 1);

  res.send();
});

app.put('/books/:id', (req, res) => {
  const { title, author } = req.body;
  const { id } = req.params;

  const newBook = { title, author, id };

  const idx = BOOKS_DATA.findIndex(b => b.id === id);
  BOOKS_DATA[idx] = newBook;

  res.send(createBookTemplate(newBook));
});

app.get('/books/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find(b => b.id === req.params.id);

  res.send(createEditFormTemplate(book));
});

app.post('/books/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  res.send(createListTemplate(BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text))));
});

// Routes for movies
app.get('/movies', (req, res) => {
  res.send(createmovieList(MOVIES_DATA));
});

app.post('/movies', (req, res) => {
  const { title, director } = req.body;
  const id = Math.random().toString();

  MOVIES_DATA.push({ id, title, director });
  res.redirect('/movies/' + id);
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = MOVIES_DATA.find(m => m.id === id);

  res.send(createmovietemplate(movie));
});

app.delete('/movies/:id', (req, res) => {
  const idx = MOVIES_DATA.findIndex(m => m.id === req.params.id);
  MOVIES_DATA.splice(idx, 1);

  res.send();
});

app.put('/movies/:id', (req, res) => {
  const { title, director } = req.body;
  const { id } = req.params;

  const newMovie = { title, director, id };

  const idx = MOVIES_DATA.findIndex(m => m.id === id);
  MOVIES_DATA[idx] = newMovie;

  res.send(createmovietemplate(newMovie));
});

app.get('/movies/edit/:id', (req, res) => {
  const movie = MOVIES_DATA.find(m => m.id === req.params.id);

  res.send(createEditFormTemplate(movie));
});

app.post('/movies/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  res.send(createmovieList(MOVIES_DATA.filter(m => m.title.toLowerCase().includes(text))));
});

// Routes for education
app.get('/education', (req, res) => {
  res.send(createEducationList(EDUCATION));
});

app.post('/education', (req, res) => {
  const { standard, institution } = req.body;
  const id = Math.random().toString();
  EDUCATION.push({ id, standard, institution });
  res.redirect('/education/' + id);
});

app.get('/education/:id', (req, res) => {
  const { id } = req.params;
  const education = EDUCATION.find(ed => ed.id === id);
  res.send(createEducationTemplate(education));
});

app.delete('/education/:id', (req, res) => {
  const { id } = req.params;
  const index = EDUCATION.findIndex(ed => ed.id === id);
  if (index !== -1) {
    EDUCATION.splice(index, 1);
  }
  res.send();
});

app.put('/education/:id', (req, res) => {
  const { id } = req.params;
  const { standard, institution } = req.body;
  const index = EDUCATION.findIndex(ed => ed.id === id);
  if (index !== -1) {
    EDUCATION[index] = { id, standard, institution };
    res.send(createEducationTemplate(EDUCATION[index]));
  } else {
    res.status(404).send('Education not found');
  }
});

app.get('/education/edit/:id', (req, res) => {
  const { id } = req.params;
  const education = EDUCATION.find(ed => ed.id === id);
  res.send(createEditFormTemplate(education));
});

app.post('/education/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  const filteredEducation = EDUCATION.filter(ed => ed.standard.toLowerCase().includes(text) || ed.institution.toLowerCase().includes(text));
  res.send(createEducationList(filteredEducation));
});

app.listen(3002, () => {
  console.log('App listening on port 3002');
});
