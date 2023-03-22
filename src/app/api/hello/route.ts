import { cookies } from 'next/headers'
import {v4} from 'uuid'

export async function GET(request: Request) {
  
  const token = v4();

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `123token=${token}` }
  });
}