import Layout from '../../components/Layout';
import Link from 'next/link';

export default function FashionAccessories() {
  // Danh sách sản phẩm mẫu
  const products = [
    {
      id: 1,
      name: 'Silk Dress',
      category: 'Dresses',
      price: '2,800,000₫',
      image: '/images/product-1.jpg',
    },
    {
      id: 2,
      name: 'Leather Handbag',
      category: 'Bags',
      price: '4,500,000₫',
      image: '/images/product-2.jpg',
    },
    {
      id: 3,
      name: 'Cashmere Coat',
      category: 'Coats',
      price: '6,200,000₫',
      image: '/images/product-3.jpg',
    },
    {
      id: 4,
      name: 'Classic Pumps',
      category: 'Shoes',
      price: '2,500,000₫',
      image: '/images/product-4.jpg',
    },
    {
      id: 5,
      name: 'Gold Bracelet',
      category: 'Jewelry',
      price: '1,800,000₫',
      image: '/images/product-5.jpg',
    },
    {
      id: 6,
      name: 'Sunglasses',
      category: 'Accessories',
      price: '950,000₫',
      image: '/images/product-6.jpg',
    },
  ];

  // Danh sách danh mục
  const categories = [
    'All',
    'Dresses',
    'Bags',
    'Shoes',
    'Accessories',
    'Jewelry',
    'Ready-to-wear',
  ];

  return (
    <Layout title="Fashion & Accessories | ThuyDung">
      <div className="container-custom py-10">
        <h1 className="section-title">Fashion & Accessories</h1>

        {/* Categories navigation */}
        <div className="mb-12">
          <ul className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <li key={category}>
                <button className="nav-link">
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/fashion-accessories/${product.id}`} key={product.id} className="group">
              <div className="mb-4">
                <div 
                  className="aspect-[3/4] bg-cover bg-center group-hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
              </div>
              <div className="text-center">
                <h3 className="playfair text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="font-medium">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
} 