const express = require('express');
const router = express.Router();
const { books } = require('../data/store');

// GET /api/books
// Query params: search, genre, minPrice, maxPrice, sortBy, order
router.get('/', (req, res) => {
  let results = [...books];
  const { search, genre, minPrice, maxPrice, sortBy, order } = req.query;

  // Search by title or author (case-insensitive)
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
    );
  }

  // Filter by genre
  if (genre) {
    results = results.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // Filter by price range
  if (minPrice) results = results.filter((b) => b.price >= parseFloat(minPrice));
  if (maxPrice) results = results.filter((b) => b.price <= parseFloat(maxPrice));

  // Sort: sortBy can be 'price', 'rating', 'title'
  if (sortBy) {
    const dir = order === 'desc' ? -1 : 1;
    results.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1 * dir;
      if (a[sortBy] > b[sortBy]) return 1 * dir;
      return 0;
    });
  }

  res.json({ count: results.length, books: results });
});

// GET /api/books/genres - list all genres
router.get('/genres', (req, res) => {
  const genres = [...new Set(books.map((b) => b.genre))];
  res.json({ genres });
});

// GET /api/books/:id
router.get('/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

module.exports = router;
