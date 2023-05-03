import '@/styles/globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ games, genres }: { games: React.ReactNode; genres: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='container'>
          {/* {genres} */}
          {games}
        </main>
      </body>
    </html>
  );
}
