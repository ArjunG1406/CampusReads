import { NextRequest, NextResponse } from 'next/server';

const popularBooks = [
  { id: '01', title: "Harry Potter and the Philosopher's Stone", tag: 'Fantasy', author: 'J.K. Rowling', image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=450&fit=crop', downloadUrl: '/download/harry-potter.pdf' },
  { id: '02', title: 'The Lord of the Rings', tag: 'Epic Fantasy', author: 'J.R.R. Tolkien', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', downloadUrl: '/download/lotr.pdf' },
  { id: '03', title: 'The Hunger Games', tag: 'Dystopian', author: 'Suzanne Collins', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', downloadUrl: '/download/hunger-games.pdf' },
  { id: '04', title: 'The Alchemist', tag: 'Philosophy', author: 'Paulo Coelho', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=450&fit=crop', downloadUrl: '/download/alchemist.pdf' },
  { id: '05', title: 'The Da Vinci Code', tag: 'Thriller', author: 'Dan Brown', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop', downloadUrl: '/download/da-vinci.pdf' },
  { id: '06', title: 'Percy Jackson', tag: 'YA Fantasy', author: 'Rick Riordan', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop', downloadUrl: '/download/percy-jackson.pdf' },
  { id: '07', title: '1984', tag: 'Classic', author: 'George Orwell', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop', downloadUrl: '/download/1984.pdf' },
  { id: '08', title: 'To Kill a Mockingbird', tag: 'Classic', author: 'Harper Lee', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', downloadUrl: '/download/mockingbird.pdf' },
  { id: '09', title: 'The Great Gatsby', tag: 'Classic', author: 'F. Scott Fitzgerald', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop', downloadUrl: '/download/gatsby.pdf' },
  { id: '10', title: 'Pride and Prejudice', tag: 'Romance', author: 'Jane Austen', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', downloadUrl: '/download/pride-prejudice.pdf' },
  { id: '11', title: 'The Catcher in the Rye', tag: 'Classic', author: 'J.D. Salinger', image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=450&fit=crop', downloadUrl: '/download/catcher.pdf' },
  { id: '12', title: 'Brave New World', tag: 'Sci-Fi', author: 'Aldous Huxley', image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&h=450&fit=crop', downloadUrl: '/download/brave-new-world.pdf' },
  { id: '13', title: 'The Hobbit', tag: 'Fantasy', author: 'J.R.R. Tolkien', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', downloadUrl: '/download/hobbit.pdf' },
  { id: '14', title: 'Fahrenheit 451', tag: 'Dystopian', author: 'Ray Bradbury', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', downloadUrl: '/download/fahrenheit-451.pdf' },
  { id: '15', title: 'Animal Farm', tag: 'Classic', author: 'George Orwell', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop', downloadUrl: '/download/animal-farm.pdf' },
  { id: '16', title: 'The Kite Runner', tag: 'Drama', author: 'Khaled Hosseini', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', downloadUrl: '/download/kite-runner.pdf' },
  { id: '17', title: 'Life of Pi', tag: 'Adventure', author: 'Yann Martel', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop', downloadUrl: '/download/life-of-pi.pdf' },
  { id: '18', title: 'The Book Thief', tag: 'Historical', author: 'Markus Zusak', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop', downloadUrl: '/download/book-thief.pdf' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const books = limit ? popularBooks.slice(0, parseInt(limit)) : popularBooks;
  return NextResponse.json({ count: books.length, books });
}
