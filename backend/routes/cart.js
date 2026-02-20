const express = require('express');
const router = express.Router();
const { books, carts } = require('../data/store');

// Helper: get or create cart for user
function getCart(userId) {
  if (!carts[userId]) carts[userId] = [];
  return carts[userId];
}

// Helper: calculate cart total
function calcTotal(cart) {
  return cart.reduce((sum, item) => {
    const book = books.find((b) => b.id === item.bookId);
    return sum + (book ? book.price * item.quantity : 0);
  }, 0);
}

// Helper: enrich cart items with book details
function enrichCart(cart) {
  return cart.map((item) => {
    const book = books.find((b) => b.id === item.bookId);
    return { ...item, book };
  });
}

// GET /api/cart - get current user's cart
router.get('/', (req, res) => {
  const cart = getCart(req.user.id);
  const enriched = enrichCart(cart);
  res.json({ items: enriched, total: calcTotal(cart).toFixed(2) });
});

// POST /api/cart - add item to cart
// Body: { bookId, quantity }
router.post('/', (req, res) => {
  const { bookId, quantity = 1 } = req.body;
  if (!bookId) return res.status(400).json({ error: 'bookId is required' });

  const book = books.find((b) => b.id === bookId);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  if (book.stock < quantity) return res.status(400).json({ error: 'Not enough stock' });

  const cart = getCart(req.user.id);
  const existing = cart.find((item) => item.bookId === bookId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ bookId, quantity });
  }

  res.json({ message: 'Added to cart', items: enrichCart(cart), total: calcTotal(cart).toFixed(2) });
});

// PATCH /api/cart/:bookId - update quantity
router.patch('/:bookId', (req, res) => {
  const { quantity } = req.body;
  if (!quantity || quantity < 1) return res.status(400).json({ error: 'quantity must be >= 1' });

  const cart = getCart(req.user.id);
  const item = cart.find((i) => i.bookId === req.params.bookId);
  if (!item) return res.status(404).json({ error: 'Item not in cart' });

  item.quantity = quantity;
  res.json({ message: 'Cart updated', items: enrichCart(cart), total: calcTotal(cart).toFixed(2) });
});

// DELETE /api/cart/:bookId - remove item from cart
router.delete('/:bookId', (req, res) => {
  const cart = getCart(req.user.id);
  const idx = cart.findIndex((i) => i.bookId === req.params.bookId);
  if (idx === -1) return res.status(404).json({ error: 'Item not in cart' });

  cart.splice(idx, 1);
  res.json({ message: 'Item removed', items: enrichCart(cart), total: calcTotal(cart).toFixed(2) });
});

// DELETE /api/cart - clear cart
router.delete('/', (req, res) => {
  carts[req.user.id] = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;
