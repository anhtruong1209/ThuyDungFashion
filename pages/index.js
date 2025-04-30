import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  const fashionVideoRef = useRef(null);
  const fragranceVideoRef = useRef(null);
  
  const [isFashionHovered, setIsFashionHovered] = useState(false);
  const [isFragranceHovered, setIsFragranceHovered] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Load xong thì mới hiện logo
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Đợi overlay loading biến mất rồi mới hiện logo
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 800);
    }, 1500);
    
    // Add scroll handler
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFashionMouseEnter = () => {
    setIsFashionHovered(true);
    if (fashionVideoRef.current) {
      fashionVideoRef.current.play();
    }
  };

  const handleFashionMouseLeave = () => {
    setIsFashionHovered(false);
    if (fashionVideoRef.current) {
      fashionVideoRef.current.pause();
    }
  };

  const handleFragranceMouseEnter = () => {
    setIsFragranceHovered(true);
    if (fragranceVideoRef.current) {
      fragranceVideoRef.current.play();
    }
  };

  const handleFragranceMouseLeave = () => {
    setIsFragranceHovered(false);
    if (fragranceVideoRef.current) {
      fragranceVideoRef.current.pause();
    }
  };

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>ThuyDung Fashion | Thời trang cao cấp</title>
        <meta name="description" content="Thời trang cao cấp ThuyDung - Khám phá bộ sưu tập thời trang độc quyền" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading overlay */}
      <div className={`loading-overlay ${isLoading ? '' : 'loaded'}`}>
        <div className="loading-logo">
          <img src="/images/logo.png" alt="ThuyDung Logo" width={180} height={60} />
        </div>
      </div>

      <main className="relative">
        {/* Logo overlay - centered absolutely */}
        <div 
          className={`absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{zIndex: 999}}
        >
          <h1 className="text-center playfair text-5xl md:text-6xl lg:text-7xl text-white font-light">
            THUY DUNG
          </h1>
        </div>
        
        {/* Split Screen Layout */}
        <div className="home-split-screen">
          {/* Fashion & Accessories Section */}
          <div 
            className="home-split-section relative"
            onMouseEnter={handleFashionMouseEnter}
            onMouseLeave={handleFashionMouseLeave}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <video 
              ref={fashionVideoRef}
              className="video-hover-play"
              muted 
              loop
              playsInline
              preload="metadata"
              width="100%"
              height="100%"
              onError={(e) => console.error("Video error:", e)}
            >
              <source src="/videos/2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="home-split-content">
              <h2 className="playfair text-xl md:text-2xl mb-4 animate-slide-up delay-300">THỜI TRANG NGƯỜI LỚN</h2>
              <Link href="/thoi-trang-nguoi-lon" className="btn btn-light animate-fade-in delay-500">
                XEM NGAY
              </Link>
            </div>
          </div>
          
          {/* Fragrance & Beauty Section */}
          <div 
            className="home-split-section relative"
            onMouseEnter={handleFragranceMouseEnter}
            onMouseLeave={handleFragranceMouseLeave}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <video 
              ref={fragranceVideoRef}
              className="video-hover-play"
              muted 
              loop
              playsInline
              preload="metadata"
              width="100%"
              height="100%"
              onError={(e) => console.error("Video error:", e)}
            >
              <source src="/videos/4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="home-split-content">
              <h2 className="playfair text-xl md:text-2xl mb-4 animate-slide-up delay-300">THỜI TRANG TRẺ CON</h2>
              <Link href="/thoi-trang-tre-con" className="btn btn-light animate-fade-in delay-500">
                XEM NGAY
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 