# 📚 CampusReads Backend API

A Node.js/Express REST API powering the CampusReads bookstore frontend (Next.js). Built without authentication for now — a guest user is auto-attached to every request so the frontend works seamlessly during development.

---

## 🗂️ Project Structure

```
backend/
├── server.js                  # Entry point — registers all routes & middleware
├── package.json
├── data/
│   └── store.js               # In-memory data store (books, carts, orders)
└── routes/
    ├── books.js               # General books with search & filter
    ├── recommended.js         # Recommended books list
    ├── popular.js             # Popular books list
    ├── cart.js                # Cart management
    └── orders.js              # Checkout & order history
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Start the server
node server.js

# Or with auto-reload (install nodemon first: npm i -g nodemon)
nodemon server.js
```

Server runs at: **http://localhost:3001**

---

## 🔌 API Reference

### Health Check
```
GET /
```
Returns `{ status, version }` — use this to confirm the server is running.

---

### 📖 Books — `/api/books`

General book catalog with full search and filter support.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | List all books |
| GET | `/api/books/:id` | Get a single book by ID |
| GET | `/api/books/genres` | List all available genres |

**Search & Filter Query Params:**

| Param | Example | Description |
|-------|---------|-------------|
| `search` | `?search=gatsby` | Search by title or author |
| `genre` | `?genre=Fiction` | Filter by genre |
| `minPrice` | `?minPrice=10` | Minimum price |
| `maxPrice` | `?maxPrice=15` | Maximum price |
| `sortBy` | `?sortBy=price` | Sort by `price`, `rating`, or `title` |
| `order` | `?order=desc` | `asc` (default) or `desc` |

**Example:**
```
GET /api/books?search=harry&genre=Fiction&sortBy=price&order=asc
```

---

### ⭐ Recommended Books — `/api/recommended`

Curated list of recommended books shown on the homepage and `/recommend` page.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/recommended` | Get all recommended books |
| GET | `/api/recommended?limit=5` | Get first N books (used by homepage) |

---

### 🔥 Popular Books — `/api/popular`

Most downloaded/popular books shown on the homepage and `/popular` page.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/popular` | Get all popular books |
| GET | `/api/popular?limit=5` | Get first N books |

---

### 🛒 Cart — `/api/cart`

Per-user cart stored in memory. Uses `req.user.id` (currently set to `guest-user-1`).

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | View current cart with totals |
| POST | `/api/cart` | Add item — body: `{ bookId, quantity }` |
| PATCH | `/api/cart/:bookId` | Update quantity — body: `{ quantity }` |
| DELETE | `/api/cart/:bookId` | Remove one item |
| DELETE | `/api/cart` | Clear entire cart |

**Example — Add to cart:**
```bash
curl -X POST http://localhost:3001/api/cart \
  -H "Content-Type: application/json" \
  -d '{"bookId": "1", "quantity": 2}'
```

---

### 📦 Orders — `/api/orders`

Checkout from cart and view order history.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | View all orders for current user |
| GET | `/api/orders/:id` | View a specific order |
| POST | `/api/orders/checkout` | Place order from current cart |

**Checkout flow:**
1. Add items to cart via `POST /api/cart`
2. Call `POST /api/orders/checkout`
3. Cart is cleared, stock is deducted, order is created

---

## 🖥️ Frontend Integration

The Next.js frontend connects to this API. Files updated to fetch from backend:

| Frontend File | Fetches From |
|---------------|-------------|
| `app/components/Recommend.tsx` | `/api/recommended?limit=5` |
| `app/recommend/page.tsx` | `/api/recommended` |
| `app/popular/page.tsx` | `/api/popular` |
| `app/search/page.tsx` | `/api/books`, `/api/recommended`, `/api/popular` |

All fetch calls use: `http://localhost:3001` — update this to your production URL when deploying.

---

## 🔍 Search Behavior

The search page (`/search?q=...`) searches across **all three** book collections simultaneously:
- `/api/books` — matches by title or author
- `/api/recommended` — matches by title, author, or tag
- `/api/popular` — matches by title, author, or tag

Results are merged and deduplicated by title before being displayed.

---

## 🔐 Authentication (Not Yet Implemented)

Auth is intentionally skipped for now. A mock guest user is injected in `server.js`:

```js
// server.js
app.use((req, res, next) => {
  req.user = { id: 'guest-user-1', name: 'Guest' };
  next();
});
```

**To add real auth later:**
1. Install a JWT library: `npm install jsonwebtoken`
2. Create an `authMiddleware.js` file
3. Replace the mock user block in `server.js` with: `app.use(authMiddleware)`
4. All routes already use `req.user.id` so they will work without any other changes

---

## 🗄️ Database (Not Yet Implemented)

All data is currently stored **in-memory** in `data/store.js`. This means data resets every time the server restarts.

**To connect a real database later:**

Replace the arrays in `data/store.js` with database calls. Recommended options:
- **MongoDB** — `npm install mongoose` (good for flexible book data)
- **PostgreSQL** — `npm install pg` or `npm install prisma` (good for orders/users)
- **SQLite** — `npm install better-sqlite3` (easiest for local dev)

---

## 🌐 CORS

CORS is enabled for all origins by default (fine for development). To restrict in production:

```js
// server.js
app.use(cors({
  origin: 'https://yourcampusreads.com'
}));
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `cors` | Cross-origin requests from frontend |
| `morgan` | HTTP request logging |

**Dev dependencies:**

| Package | Purpose |
|---------|---------|
| `nodemon` | Auto-restart on file changes |

---

## 🧪 Testing the API

**Browser** (GET requests only):
```
http://localhost:3001/api/books
http://localhost:3001/api/recommended
http://localhost:3001/api/popular
http://localhost:3001/api/books?search=gatsby
```

**curl:**
```bash
# Search books
curl "http://localhost:3001/api/books?search=dune"

# Add to cart
curl -X POST http://localhost:3001/api/cart \
  -H "Content-Type: application/json" \
  -d '{"bookId":"1","quantity":2}'

# Checkout
curl -X POST http://localhost:3001/api/orders/checkout

# View orders
curl http://localhost:3001/api/orders
```

**Recommended tool:** Install the **Thunder Client** extension in VS Code for a GUI to test all routes without leaving your editor.

---

## 🚢 Deployment Notes

When deploying to production (Vercel, Railway, Render, etc.):

1. Change all frontend fetch URLs from `http://localhost:3001` to your live API URL
2. Set `PORT` via environment variable (already supported in `server.js`)
3. Replace in-memory store with a real database
4. Add real authentication
5. Restrict CORS to your frontend domain

---

## 👥 Contributing

1. Add new book data in `data/store.js` or the relevant route file
2. Add new routes in `routes/` and register them in `server.js`
3. Keep route files focused — one file per resource
4. All routes should use `req.user.id` for any user-specific data (ready for auth)
