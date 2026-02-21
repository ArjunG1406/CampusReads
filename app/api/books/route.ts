import { NextRequest, NextResponse } from 'next/server';

const books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', price: 12.99, stock: 20, rating: 4.5, description: 'A story of the Jazz Age.' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', price: 10.99, stock: 15, rating: 4.8, description: 'A classic of modern American literature.' },
  { id: '3', title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction', price: 15.99, stock: 30, rating: 4.7, description: 'A brief history of humankind.' },
  { id: '4', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', price: 14.99, stock: 25, rating: 4.9, description: 'Tiny changes, remarkable results.' },
  { id: '5', title: 'Dune', author: 'Frank Herbert', genre: 'Sci-Fi', price: 13.99, stock: 18, rating: 4.6, description: 'An epic science fiction saga.' },
  { id: '6', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', price: 11.99, stock: 22, rating: 4.4, description: 'A journey of self-discovery.' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const genre = searchParams.get('genre');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sortBy = searchParams.get('sortBy');
  const order = searchParams.get('order');

  let results = [...books];

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }

  if (genre) {
    results = results.filter((b) => b.genre.toLowerCase() === genre.toLowerCase());
  }

  if (minPrice) results = results.filter((b) => b.price >= parseFloat(minPrice));
  if (maxPrice) results = results.filter((b) => b.price <= parseFloat(maxPrice));

  if (sortBy) {
    const dir = order === 'desc' ? -1 : 1;
    results.sort((a: any, b: any) => {
      if (a[sortBy] < b[sortBy]) return -1 * dir;
      if (a[sortBy] > b[sortBy]) return 1 * dir;
      return 0;
    });
  }

  return NextResponse.json({ count: results.length, books: results });
}
