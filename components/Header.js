import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerClass = isHomePage && !isScrolled && !mobileMenuOpen 
    ? "fixed w-full z-50 transition-colors duration-300"
    : "fixed w-full bg-white bg-opacity-95 border-b border-gray-200 z-50 transition-colors duration-300";

  return (
    <header className={headerClass}>
      <div className="container-custom">
        {/* Top navigation */}
        <div className="py-4 flex justify-between items-center">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isHomePage && !isScrolled ? 'text-white' : 'text-black'}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-center">
            <Link href="/" className={`playfair text-3xl font-medium tracking-wider ${isHomePage && !isScrolled ? 'text-white' : 'text-dior-black'}`}>
              THUYDUNG
            </Link>
          </div>

          {/* Right nav items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/search" className={isHomePage && !isScrolled ? 'text-white' : 'text-black'} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Link>
            <Link href="/account" className={isHomePage && !isScrolled ? 'text-white' : 'text-black'} aria-label="Account">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </Link>
            <Link href="/wishlist" className={isHomePage && !isScrolled ? 'text-white' : 'text-black'} aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </Link>
            <Link href="/cart" className={isHomePage && !isScrolled ? 'text-white' : 'text-black'} aria-label="Shopping Bag">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Main navigation - Desktop */}
        <nav className={`hidden md:block py-3 ${isHomePage && !isScrolled ? 'nav-transparent' : ''}`}>
          <ul className="flex justify-center space-x-10">
            <li>
              <Link href="/fashion-accessories" className={`nav-link ${isHomePage && !isScrolled ? 'text-white' : ''}`}>Fashion & Accessories</Link>
            </li>
            <li>
              <Link href="/fragrance-beauty" className={`nav-link ${isHomePage && !isScrolled ? 'text-white' : ''}`}>Fragrance & Beauty</Link>
            </li>
            <li>
              <Link href="/collections" className={`nav-link ${isHomePage && !isScrolled ? 'text-white' : ''}`}>Collections</Link>
            </li>
            <li>
              <Link href="/news" className={`nav-link ${isHomePage && !isScrolled ? 'text-white' : ''}`}>News</Link>
            </li>
            <li>
              <Link href="/about" className={`nav-link ${isHomePage && !isScrolled ? 'text-white' : ''}`}>About ThuyDung</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-200">
            <ul className="space-y-4">
              <li>
                <Link href="/fashion-accessories" className="block px-4 py-2 nav-link">
                  Fashion & Accessories
                </Link>
              </li>
              <li>
                <Link href="/fragrance-beauty" className="block px-4 py-2 nav-link">
                  Fragrance & Beauty
                </Link>
              </li>
              <li>
                <Link href="/collections" className="block px-4 py-2 nav-link">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/news" className="block px-4 py-2 nav-link">
                  News
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-4 py-2 nav-link">
                  About ThuyDung
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-4 mt-4 flex space-x-6 px-4">
                <Link href="/search" className="text-black" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </Link>
                <Link href="/account" className="text-black" aria-label="Account">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </Link>
                <Link href="/wishlist" className="text-black" aria-label="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </Link>
                <Link href="/cart" className="text-black" aria-label="Shopping Bag">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
} 