import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container-custom">
        {/* Newsletter section */}
        <div className="max-w-lg mx-auto mb-12 text-center">
          <h3 className="playfair text-xl mb-4">Inspire me with all the latest ThuyDung news</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="border-b border-black pb-1 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                required
                className="w-full py-1 focus:outline-none"
                aria-label="Email"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white text-sm uppercase tracking-wider py-2 px-6 hover:bg-dior-gold transition-colors"
            >
              Confirm
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">ThuyDung boutiques</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/boutiques/thuydung-couture" className="hover:text-dior-gold transition-colors">
                  ThuyDung Couture
                </Link>
              </li>
              <li>
                <Link href="/boutiques/thuydung-parfums" className="hover:text-dior-gold transition-colors">
                  ThuyDung Parfums
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Client services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/contact" className="hover:text-dior-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/delivery-returns" className="hover:text-dior-gold transition-colors">
                  Delivery and returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-dior-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">The house of ThuyDung</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/sustainability" className="hover:text-dior-gold transition-colors">
                  ThuyDung Sustainability
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="hover:text-dior-gold transition-colors">
                  Ethics & Compliance
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-dior-gold transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Legal terms</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/legal" className="hover:text-dior-gold transition-colors">
                  Legal Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-dior-gold transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/sales-conditions" className="hover:text-dior-gold transition-colors">
                  General Sales Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-dior-gold transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Country selector and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="mb-6 md:mb-0">
            <span className="text-sm">Vietnam (English)</span>
          </div>

          <div className="flex space-x-6">
            <Link href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-dior-gold transition-colors" aria-label="TikTok">
              <span className="sr-only">TikTok</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-dior-gold transition-colors" aria-label="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-dior-gold transition-colors" aria-label="X (Twitter)">
              <span className="sr-only">X (Twitter)</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-dior-gold transition-colors" aria-label="Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-dior-gold transition-colors" aria-label="Pinterest">
              <span className="sr-only">Pinterest</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 