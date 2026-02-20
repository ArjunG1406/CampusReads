// In-memory data store (replace with a real DB later e.g. MongoDB, PostgreSQL)

const books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', price: 12.99, stock: 20, rating: 4.5, description: 'A story of the Jazz Age.' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', price: 10.99, stock: 15, rating: 4.8, description: 'A classic of modern American literature.' },
  { id: '3', title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', price: 15.99, stock: 30, rating: 4.7, description: 'A brief history of humankind.' },
  { id: '4', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', price: 14.99, stock: 25, rating: 4.9, description: 'Tiny changes, remarkable results.' },
  { id: '5', title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', price: 13.99, stock: 18, rating: 4.6, description: 'An epic science fiction saga.' },
  { id: '6', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', price: 11.99, stock: 22, rating: 4.4, description: 'A journey of self-discovery.' },
];

// carts: { [userId]: [ { bookId, quantity } ] }
const carts = {};

// orders: [ { id, userId, items, total, status, createdAt } ]
const orders = [];

module.exports = { books, carts, orders };
