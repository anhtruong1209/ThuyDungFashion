import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import { FiArrowLeft, FiPhoneCall, FiMail, FiClock } from 'react-icons/fi';
import { adultProducts } from '../../data/products';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      // Tìm sản phẩm dựa trên id
      const foundProduct = adultProducts.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Nếu không tìm thấy sản phẩm
        router.push('/thoi-trang-nguoi-lon');
      }
      
      // Giả lập thời gian tải
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  }, [id, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Giả lập gửi form thành công
    setFormSuccess(true);
    // Reset form sau 3 giây
    setTimeout(() => {
      setFormSuccess(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-logo">
          <img src="/images/logo.png" alt="ThuyDung Logo" width={180} height={60} />
        </div>
      </div>
    );
  }

  // Sản phẩm được tìm thấy và đã tải xong
  if (!product) return null;

  return (
    <div className="min-h-screen">
      <Head>
        <title>{product.name} | ThuyDung Fashion</title>
        <meta name="description" content={`${product.name} - ThuyDung Fashion. ${product.description.substring(0, 120)}...`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm">
            <Link href="/" className="text-gray-500 hover:text-black">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/thoi-trang-nguoi-lon" className="text-gray-500 hover:text-black">
              Thời trang người lớn
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>

          {/* Nút quay lại */}
          <Link href="/thoi-trang-nguoi-lon" className="inline-flex items-center mb-8 text-gray-700 hover:text-black transition-colors">
            <FiArrowLeft className="mr-2" />
            <span>Quay lại danh sách sản phẩm</span>
          </Link>

          {/* Chi tiết sản phẩm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Hình ảnh sản phẩm */}
            <div className="overflow-hidden rounded-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>

            {/* Thông tin sản phẩm */}
            <div>
              <h1 className="text-3xl font-medium playfair mb-4">{product.name}</h1>
              <p className="text-2xl text-gray-800 font-medium mb-6">{product.price}</p>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Mô tả sản phẩm</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-medium mb-6">Liên hệ đặt hàng</h2>
                
                {/* Thông tin liên hệ nhanh */}
                <div className="bg-gray-50 p-6 mb-8 rounded-sm">
                  <div className="flex items-center mb-4">
                    <FiPhoneCall className="text-gray-700 mr-3" />
                    <span>Gọi ngay: <a href="tel:+84912969518" className="font-medium hover:underline">0912 969 518</a></span>
                  </div>
                  <div className="flex items-center mb-4">
                    <FiMail className="text-gray-700 mr-3" />
                    <span>Email: <a href="mailto:info@thuydung.com" className="font-medium hover:underline">info@thuydung.com</a></span>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="text-gray-700 mr-3" />
                    <span>Thời gian: 8:00 - 20:00 (Thứ 2 - Chủ nhật)</span>
                  </div>
                </div>

                {/* Form liên hệ */}
                <form onSubmit={handleSubmit}>
                  {formSuccess ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-sm mb-6">
                      Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể!
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tin nhắn</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          placeholder="Thông tin chi tiết yêu cầu của bạn..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                      >
                        Gửi yêu cầu
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 