const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const booksRouter = require('./routes/books');
const cartRouter = require('./routes/cart');
const ordersRouter = require('./routes/orders');
const { router: recommendedRouter } = require('./routes/recommended');
const { router: popularRouter } = require('./routes/popular');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// TODO: Auth middleware will go here later
// app.use(authMiddleware);

// Mock user for now (replace with real auth later)
app.use((req, res, next) => {
  req.user = { id: 'guest-user-1', name: 'Guest' };
  next();
});

// Routes
app.use('/api/books', booksRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/recommended', recommendedRouter);
app.use('/api/popular', popularRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Bookstore API running', version: '1.0.0' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Bookstore backend running at http://localhost:${PORT}`);
});

module.exports = app;