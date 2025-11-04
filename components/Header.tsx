'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <nav className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
