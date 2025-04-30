import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Cảm ơn bạn đã đăng ký!');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        {/* Newsletter section */}
        <div className="max-w-lg mx-auto mb-12 text-center">
          <h3 className="playfair text-xl mb-4">Đăng ký nhận tin từ ThuyDung</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="border-b border-black pb-1 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email của bạn *"
                required
                className="w-full py-1 focus:outline-none"
                aria-label="Email"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white text-sm uppercase tracking-wider py-2 px-6 hover:bg-gray-800 transition-colors"
            >
              Đăng ký
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Cửa hàng ThuyDung</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>Số 99 Đường Lê Lợi, Phường Gia Viên, Quận Ngô Quyền, Thành phố Hải Phòng </span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>Chợ Ga, Phường Cầu Đất, Quận Ngô Quyền, Thành phố Hải Phòng </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <a href="tel:+84912969518" className="hover:underline">
                  0912 969 518
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <a href="mailto:info@thuydung.com" className="hover:underline">
                  info@thuydung.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Dịch vụ khách hàng</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/lien-he" className="hover:underline">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/giao-hang-va-doi-tra" className="hover:underline">
                  Giao hàng và đổi trả
                </Link>
              </li>
              <li>
                <Link href="/cau-hoi-thuong-gap" className="hover:underline">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Về ThuyDung</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/gioi-thieu" className="hover:underline">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" className="hover:underline">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/tuyen-dung" className="hover:underline">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.facebook.com/ChiEmThuyDung" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </Link>
            </div>
            <p className="text-sm">Theo dõi chúng tôi trên mạng xã hội để cập nhật những thông tin mới nhất về sản phẩm và khuyến mãi</p>
          </div>
        </div>

        {/* Copyright and location */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2023 ThuyDung Fashion. Tất cả các quyền được bảo lưu.</p>
          </div>
          <div>
            <p className="text-sm">Việt Nam (Tiếng Việt) 🇻🇳</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 