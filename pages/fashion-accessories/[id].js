import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { useState } from 'react';

// Giả sử data từ database
const products = [
  {
    id: 1,
    name: 'Silk Dress',
    category: 'Dresses',
    price: '2,800,000₫',
    image: '/images/product-1.jpg',
    description: 'Elegant silk dress with exquisite details, embodying the spirit of ThuyDung. Made from the finest materials, this dress features a flattering silhouette that accentuates the female form.',
    details: [
      'Silk material',
      'Made in Vietnam',
      'Delicate hand-embroidery',
      'Back zip closure',
      'Adjustable shoulder straps'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Beige'],
    related: [2, 3, 5]
  },
  {
    id: 2,
    name: 'Leather Handbag',
    category: 'Bags',
    price: '4,500,000₫',
    image: '/images/product-2.jpg',
    description: 'Luxury leather handbag crafted with meticulous attention to detail. This elegant piece combines functionality with timeless design.',
    details: [
      'Genuine calfskin leather',
      'Signature ThuyDung hardware',
      'Interior zip pocket',
      'Adjustable shoulder strap',
      'Magnetic closure'
    ],
    colors: ['Black', 'Tan', 'Navy'],
    related: [3, 5, 6]
  },
  {
    id: 3,
    name: 'Cashmere Coat',
    category: 'Coats',
    price: '6,200,000₫',
    image: '/images/product-3.jpg',
    description: 'Luxurious cashmere coat that combines warmth with sophisticated style. A timeless piece for your wardrobe.',
    details: [
      '100% cashmere',
      'Satin lining',
      'Double-breasted closure',
      'Side pockets',
      'Notched lapel'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Grey'],
    related: [1, 4, 5]
  },
  {
    id: 4,
    name: 'Classic Pumps',
    category: 'Shoes',
    price: '2,500,000₫',
    image: '/images/product-4.jpg',
    description: 'Timeless classic pumps that elevate any outfit. Crafted with premium materials for comfort and durability.',
    details: [
      'Italian leather',
      '8.5cm heel height',
      'Pointed toe',
      'Leather sole',
      'Memory foam insole'
    ],
    sizes: ['35', '36', '37', '38', '39', '40'],
    colors: ['Black', 'Nude', 'Red'],
    related: [2, 3, 6]
  },
  {
    id: 5,
    name: 'Gold Bracelet',
    category: 'Jewelry',
    price: '1,800,000₫',
    image: '/images/product-5.jpg',
    description: 'Elegant gold bracelet featuring the iconic ThuyDung design elements. A perfect accessory for everyday luxury.',
    details: [
      '18K gold plated',
      'Signature ThuyDung clasp',
      'Adjustable size',
      'Handcrafted details',
      'Presented in a luxury gift box'
    ],
    related: [1, 2, 6]
  },
  {
    id: 6,
    name: 'Sunglasses',
    category: 'Accessories',
    price: '950,000₫',
    image: '/images/product-6.jpg',
    description: 'Sophisticated sunglasses that combine style and protection. A must-have accessory for the modern woman.',
    details: [
      'Acetate frame',
      'UV400 protection',
      'ThuyDung logo on temples',
      'Includes leather case',
      'Polarized lenses'
    ],
    colors: ['Black', 'Tortoiseshell', 'Burgundy'],
    related: [2, 4, 5]
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Handle fallback during SSR or loading
  if (!id) {
    return <div className="container-custom py-20 text-center">Loading...</div>;
  }

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id));

  // Handle product not found
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="section-title">Product Not Found</h1>
          <p className="mb-6">The product you are looking for is not available.</p>
          <Link href="/fashion-accessories" className="btn-primary">
            Return to Fashion & Accessories
          </Link>
        </div>
      </Layout>
    );
  }

  // Find related products
  const relatedProducts = product.related
    ? product.related.map(relId => products.find(p => p.id === relId)).filter(Boolean)
    : [];

  return (
    <Layout title={`${product.name} | ThuyDung`}>
      <div className="container-custom py-10">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="mr-2">
              <Link href="/" className="hover:text-dior-gold transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="mr-2">
              <Link href="/fashion-accessories" className="hover:text-dior-gold transition-colors">
                Fashion & Accessories
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product image */}
          <div>
            <div 
              className="aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: `url('${product.image}')` }}
            ></div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="playfair text-3xl mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <p className="text-xl mb-6">{product.price}</p>
            <p className="mb-8">{product.description}</p>

            {/* Product details */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase mb-3">Details</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm">{detail}</li>
                ))}
              </ul>
            </div>

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-4 py-2 text-sm min-w-[60px] ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color selector */}
            {product.colors && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`border px-4 py-2 text-sm min-w-[80px] ${
                        selectedColor === color 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase mb-3">Quantity</h3>
              <div className="flex border border-gray-300 w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <div className="flex-1 flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button className="btn-primary w-full mb-4">
              Add to Shopping Bag
            </button>

            {/* Wishlist button */}
            <button className="flex items-center justify-center w-full py-3 border border-black uppercase tracking-wider text-sm font-medium hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Add to Wishlist
            </button>
          </div>
        </div>

        {/* Related products section */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="section-title">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relProduct) => (
                <Link href={`/fashion-accessories/${relProduct.id}`} key={relProduct.id} className="group">
                  <div className="mb-4">
                    <div 
                      className="aspect-[3/4] bg-cover bg-center group-hover:opacity-90 transition-opacity"
                      style={{ backgroundImage: `url('${relProduct.image}')` }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <h3 className="playfair text-lg">{relProduct.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{relProduct.category}</p>
                    <p className="font-medium">{relProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
} 