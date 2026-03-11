'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white sticky top-0 z-50">
      <h1 className="text-lg md:text-xl font-bold">MyPortfolio</h1>

      <nav className="hidden md:flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Project</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}