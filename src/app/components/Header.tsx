"use client"

// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white font-bold text-lg">
          <Link href="/Ice Cream Paradise">
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="sm:hidden text-white"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Links (for larger screens) */}
        <ul className={`sm:flex ${isMenuOpen ? "block" : "hidden"} sm:space-x-6 space-y-4 sm:space-y-0 text-white`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
