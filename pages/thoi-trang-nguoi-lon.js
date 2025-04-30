import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { adultProducts } from '../data/products';

export default function ThoiTrangNguoiLon() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  
  // Tính toán sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = adultProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(adultProducts.length / productsPerPage);

  useEffect(() => {
    // Add loading animation effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Xử lý chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Các trang để hiển thị trong phân trang
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Số trang tối đa hiển thị
    
    if (totalPages <= maxPagesToShow) {
      // Nếu tổng số trang ít, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Nếu nhiều trang, hiển thị một phần
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      
      // Điều chỉnh khoảng nếu ở cuối
      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      
      // Thêm trang đầu nếu cần
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }
      
      // Thêm các trang ở giữa
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Thêm trang cuối nếu cần
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Thời Trang Người Lớn | ThuyDung Fashion</title>
        <meta name="description" content="Khám phá bộ sưu tập thời trang cao cấp dành cho người lớn từ ThuyDung." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading overlay */}
      <div className={`loading-overlay ${isLoading ? '' : 'loaded'}`}>
        <div className="loading-logo">
          <img src="/images/logo.png" alt="ThuyDung Logo" width={180} height={60} />
        </div>
      </div>

      <main className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="section-title mb-12">BỘ SƯU TẬP THỜI TRANG NGƯỜI LỚN</h1>
          
          <div className="text-center mb-12">
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              Khám phá bộ sưu tập thời trang cao cấp mới nhất dành cho người lớn từ ThuyDung. 
              Sự kết hợp hoàn hảo giữa phong cách hiện đại và nét đẹp truyền thống.
            </p>
          </div>
          
          {/* Hiển thị sản phẩm */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover product-card-image transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Link href={`/thoi-trang-nguoi-lon/${product.id}`} className="bg-white text-black py-2 px-4 rounded-sm shadow-md hover:bg-gray-100 transition-colors font-medium inline-block">
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product-card-content mt-4">
                  <Link href={`/thoi-trang-nguoi-lon/${product.id}`} className="block">
                    <h3 className="product-title text-lg font-medium hover:text-gray-700 transition-colors">{product.name}</h3>
                    <p className="product-price text-gray-700 mt-1">{product.price}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Phân trang */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
              <button 
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === 1 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                disabled={currentPage === 1}
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              
              {getPageNumbers().map((number, index) => (
                <button
                  key={index}
                  onClick={() => typeof number === 'number' && paginate(number)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    number === currentPage 
                      ? 'bg-black text-white' 
                      : number === '...' 
                        ? 'cursor-default' 
                        : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${currentPage === totalPages ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
                disabled={currentPage === totalPages}
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link href="/" className="btn btn-dark">
              QUAY LẠI TRANG CHỦ
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 