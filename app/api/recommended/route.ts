import { NextRequest, NextResponse } from 'next/server';

const recommendedBooks = [
  { id: '01', title: 'Atomic Habits', tag: 'Self-Help', author: 'James Clear', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', downloadUrl: '/download/atomic-habits.pdf' },
  { id: '02', title: 'Sapiens', tag: 'History', author: 'Yuval Noah Harari', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', downloadUrl: '/download/sapiens.pdf' },
  { id: '03', title: 'Educated', tag: 'Memoir', author: 'Tara Westover', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', downloadUrl: '/download/educated.pdf' },
  { id: '04', title: 'Thinking, Fast and Slow', tag: 'Psychology', author: 'Daniel Kahneman', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', downloadUrl: '/download/thinking-fast-slow.pdf' },
  { id: '05', title: 'The Power of Now', tag: 'Spirituality', author: 'Eckhart Tolle', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop', downloadUrl: '/download/power-of-now.pdf' },
  { id: '06', title: 'Born a Crime', tag: 'Biography', author: 'Trevor Noah', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', downloadUrl: '/download/born-crime.pdf' },
  { id: '07', title: 'The 7 Habits of Highly Effective People', tag: 'Business', author: 'Stephen Covey', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=450&fit=crop', downloadUrl: '/download/7-habits.pdf' },
  { id: '08', title: 'Becoming', tag: 'Memoir', author: 'Michelle Obama', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop', downloadUrl: '/download/becoming.pdf' },
  { id: '09', title: 'The Subtle Art of Not Giving a F*ck', tag: 'Self-Help', author: 'Mark Manson', image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop', downloadUrl: '/download/subtle-art.pdf' },
  { id: '10', title: "Can't Hurt Me", tag: 'Motivation', author: 'David Goggins', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop', downloadUrl: '/download/cant-hurt-me.pdf' },
  { id: '11', title: 'Grit', tag: 'Psychology', author: 'Angela Duckworth', image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&h=450&fit=crop', downloadUrl: '/download/grit.pdf' },
  { id: '12', title: 'The Body Keeps the Score', tag: 'Psychology', author: 'Bessel van der Kolk', image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=450&fit=crop', downloadUrl: '/download/body-keeps-score.pdf' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const books = limit ? recommendedBooks.slice(0, parseInt(limit)) : recommendedBooks;
  return NextResponse.json({ count: books.length, books });
}
