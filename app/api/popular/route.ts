import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  let query = supabase
    .from('books')
    .select('*')
    .eq('type', 'popular');

  if (limit) query = query.limit(parseInt(limit));

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ count: data.length, books: data });
}
