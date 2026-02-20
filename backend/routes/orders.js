const express = require('express');
const router = express.Router();
const { books, carts, orders } = require('../data/store');

function generateId() {
  return 'ord-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

// GET /api/orders - get all orders for current user
router.get('/', (req, res) => {
  const userOrders = orders.filter((o) => o.userId === req.user.id);
  res.json({ orders: userOrders });
});

// GET /api/orders/:id - get single order
router.get('/:id', (req, res) => {
  const order = orders.find((o) => o.id === req.params.id && o.userId === req.user.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// POST /api/orders/checkout - place order from cart
router.post('/checkout', (req, res) => {
  const cart = carts[req.user.id];
  if (!cart || cart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  // Build order items and check stock
  const items = [];
  let total = 0;

  for (const item of cart) {
    const book = books.find((b) => b.id === item.bookId);
    if (!book) return res.status(400).json({ error: `Book ${item.bookId} not found` });
    if (book.stock < item.quantity) {
      return res.status(400).json({ error: `Not enough stock for "${book.title}"` });
    }

    items.push({ bookId: book.id, title: book.title, quantity: item.quantity, price: book.price });
    total += book.price * item.quantity;
  }

  // Deduct stock
  items.forEach((item) => {
    const book = books.find((b) => b.id === item.bookId);
    book.stock -= item.quantity;
  });

  // Create order
  const order = {
    id: generateId(),
    userId: req.user.id,
    items,
    total: parseFloat(total.toFixed(2)),
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  carts[req.user.id] = []; // Clear cart

  res.status(201).json({ message: 'Order placed successfully!', order });
});

module.exports = router;
