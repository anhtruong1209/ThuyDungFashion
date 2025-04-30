import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [pageTransition, setPageTransition] = useState(false);
  const router = useRouter();

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle page transitions for logo animation
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setPageTransition(true);
    };
    
    const handleRouteChangeComplete = () => {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
      
      // Reset page transition after animation completes
      setTimeout(() => {
        setPageTransition(false);
      }, 600);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  // Define the categories and subcategories
  const categories = {
    women: ['Áo', 'Quần', 'Váy', 'Phụ kiện', 'Giày dép'],
    men: ['Áo', 'Quần', 'Phụ kiện', 'Giày dép'],
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white text-black shadow-sm py-2' : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl header-icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FiX className="animate-scale-up" /> : <FiMenu className="animate-scale-up" />}
          </button>

          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button 
                onClick={() => handleDropdownToggle('women')}
                className={`nav-link flex items-center ${router.pathname.startsWith('/women') ? 'active' : ''} animate-fade-in`}
              >
                NỮ <FiChevronDown className={`ml-1 transition-transform duration-300 ${activeDropdown === 'women' ? 'rotate-180' : ''}`} size={14} />
              </button>
              {activeDropdown === 'women' && (
                <div className="absolute top-full left-0 bg-white text-black shadow-md py-4 px-6 min-w-48 animate-slide-down">
                  {categories.women.map((subcategory, index) => (
                    <Link 
                      key={subcategory}
                      href={`/women/${subcategory.toLowerCase().replace(/-/g, '').replace(/\s+/g, '-')}`}
                      className="block py-2 text-sm hover:text-gray-600 whitespace-nowrap animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => handleDropdownToggle('men')}
                className={`nav-link flex items-center ${router.pathname.startsWith('/men') ? 'active' : ''} animate-fade-in delay-100`}
              >
                NAM <FiChevronDown className={`ml-1 transition-transform duration-300 ${activeDropdown === 'men' ? 'rotate-180' : ''}`} size={14} />
              </button>
              {activeDropdown === 'men' && (
                <div className="absolute top-full left-0 bg-white text-black shadow-md py-4 px-6 min-w-48 animate-slide-down">
                  {categories.men.map((subcategory, index) => (
                    <Link 
                      key={subcategory}
                      href={`/men/${subcategory.toLowerCase().replace(/-/g, '').replace(/\s+/g, '-')}`}
                      className="block py-2 text-sm hover:text-gray-600 whitespace-nowrap animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Logo (Center on all screens) */}
          <Link href="/" className={`absolute left-1/2 transform -translate-x-1/2 playfair text-2xl tracking-widest font-light ${pageTransition ? 'logo-transition' : ''}`} style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
            THUYDUNG
          </Link>

          {/* Right Icons - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="header-icon animate-fade-in" aria-label="Search">
              <FiSearch />
            </button>
            <Link href="/account" className="header-icon animate-fade-in delay-100" aria-label="Account">
              <FiUser />
            </Link>
            <Link href="/wishlist" className="header-icon animate-fade-in delay-200" aria-label="Wishlist">
              <FiHeart />
            </Link>
            <Link href="/cart" className="header-icon animate-fade-in delay-300 relative" aria-label="Shopping Bag">
              <FiShoppingBag />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-scale-up">0</span>
            </Link>
          </div>
          
          {/* Empty div to maintain flex layout on mobile */}
          <div className="md:hidden"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col space-y-6 p-8">
          <div>
            <button 
              className={`nav-link-mobile flex items-center justify-between w-full ${router.pathname.startsWith('/women') ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('women-mobile')}
            >
              <span>NỮ</span>
              <FiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'women-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'women-mobile' && (
              <div className="mt-4 ml-4 flex flex-col space-y-4 animate-slide-down">
                {categories.women.map((subcategory) => (
                  <Link 
                    key={subcategory}
                    href={`/women/${subcategory.toLowerCase().replace(/-/g, '').replace(/\s+/g, '-')}`}
                    className="text-sm"
                    onClick={toggleMobileMenu}
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <button 
              className={`nav-link-mobile flex items-center justify-between w-full ${router.pathname.startsWith('/men') ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('men-mobile')}
            >
              <span>NAM</span>
              <FiChevronDown className={`transition-transform duration-300 ${activeDropdown === 'men-mobile' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'men-mobile' && (
              <div className="mt-4 ml-4 flex flex-col space-y-4 animate-slide-down">
                {categories.men.map((subcategory) => (
                  <Link 
                    key={subcategory}
                    href={`/men/${subcategory.toLowerCase().replace(/-/g, '').replace(/\s+/g, '-')}`}
                    className="text-sm"
                    onClick={toggleMobileMenu}
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/collections" className={`nav-link-mobile ${router.pathname === '/collections' ? 'active' : ''}`} onClick={toggleMobileMenu}>
            BỘ SƯU TẬP
          </Link>
          <Link href="/about" className={`nav-link-mobile ${router.pathname === '/about' ? 'active' : ''}`} onClick={toggleMobileMenu}>
            GIỚI THIỆU
          </Link>
          
          {/* Added right navigation items to mobile menu */}
          <div className="flex flex-col space-y-6 mt-6 border-t pt-6">
            <Link href="/search" className="nav-link-mobile flex items-center" onClick={toggleMobileMenu}>
              <FiSearch className="mr-3" /> Tìm kiếm
            </Link>
            <Link href="/account" className="nav-link-mobile flex items-center" onClick={toggleMobileMenu}>
              <FiUser className="mr-3" /> Tài khoản
            </Link>
            <Link href="/wishlist" className="nav-link-mobile flex items-center" onClick={toggleMobileMenu}>
              <FiHeart className="mr-3" /> Yêu thích
            </Link>
            <Link href="/cart" className="nav-link-mobile flex items-center" onClick={toggleMobileMenu}>
              <FiShoppingBag className="mr-3" /> Giỏ hàng
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 