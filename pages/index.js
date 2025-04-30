import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  
  // Pause videos initially
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.pause();
    }
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  }, []);

  // Handle mouse enter/leave for left section
  const handleMouseEnterLeft = () => {
    setIsHoveringLeft(true);
    if (videoRef1.current) {
      videoRef1.current.play();
    }
  };

  const handleMouseLeaveLeft = () => {
    setIsHoveringLeft(false);
    if (videoRef1.current) {
      videoRef1.current.pause();
    }
  };

  // Handle mouse enter/leave for right section
  const handleMouseEnterRight = () => {
    setIsHoveringRight(true);
    if (videoRef2.current) {
      videoRef2.current.play();
    }
  };

  const handleMouseLeaveRight = () => {
    setIsHoveringRight(false);
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Split screen container */}
      <div className="h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left section - Fashion & Accessories */}
        <Link 
          href="/fashion-accessories" 
          className="split-screen-section relative h-1/2 md:h-full w-full md:w-1/2"
          onMouseEnter={handleMouseEnterLeft}
          onMouseLeave={handleMouseLeaveLeft}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video 
            ref={videoRef1}
            className="absolute w-full h-full object-cover"
            muted 
            loop
            playsInline
          >
            <source src="/videos/2.webm" type="video/webm" />
            <source src="/videos/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
            <div className="w-full px-4 absolute bottom-20">
              <h2 className="playfair text-2xl md:text-4xl text-white mb-6">Fashion & Accessories</h2>
              <span className="shop-now text-white text-sm uppercase tracking-widest hover:text-dior-gold transition-colors">
                Shop now
              </span>
            </div>
          </div>
        </Link>

        {/* Right section - Fragrance & Beauty */}
        <Link 
          href="/fragrance-beauty" 
          className="split-screen-section relative h-1/2 md:h-full w-full md:w-1/2"
          onMouseEnter={handleMouseEnterRight}
          onMouseLeave={handleMouseLeaveRight}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video 
            ref={videoRef2}
            className="absolute w-full h-full object-cover"
            muted 
            loop
            playsInline
          >
            <source src="/videos/3.webm" type="video/webm" />
            <source src="/videos/3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
            <div className="w-full px-4 absolute bottom-20">
              <h2 className="playfair text-2xl md:text-4xl text-white mb-6">Fragrance & Beauty</h2>
              <span className="shop-now text-white text-sm uppercase tracking-widest hover:text-dior-gold transition-colors">
                Shop now
              </span>
            </div>
          </div>
        </Link>

        {/* Logo overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <h1 className="playfair text-5xl md:text-7xl text-white text-center tracking-widest">THUYDUNG</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
} 