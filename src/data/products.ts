import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with active noise cancellation and 30-hour battery life.',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Electronics',
    stock: 25,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.5,
    reviews: 128,
    features: ['Active Noise Cancellation', '30-hour Battery', 'Quick Charge', 'Bluetooth 5.0'],
    isOnSale: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights.',
    price: 299.99,
    category: 'Electronics',
    stock: 15,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.8,
    reviews: 89,
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery']
  },
  {
    id: '3',
    name: 'Organic Coffee Beans',
    description: 'Premium single-origin coffee beans, roasted to perfection for a rich and aromatic experience.',
    price: 24.99,
    category: 'Food & Beverages',
    stock: 50,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.7,
    reviews: 234,
    features: ['Single Origin', 'Organic Certified', 'Medium Roast', 'Fair Trade']
  },
  {
    id: '4',
    name: 'Premium Yoga Mat',
    description: 'Eco-friendly yoga mat with superior grip and cushioning for all your practice needs.',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Sports & Outdoors',
    stock: 30,
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.6,
    reviews: 156,
    features: ['Eco-Friendly Material', 'Non-Slip Surface', '6mm Thickness', 'Carrying Strap'],
    isOnSale: true
  },
  {
    id: '5',
    name: 'Mechanical Keyboard',
    description: 'High-performance mechanical keyboard with RGB backlighting and premium switches.',
    price: 159.99,
    category: 'Electronics',
    stock: 12,
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.9,
    reviews: 67,
    features: ['Mechanical Switches', 'RGB Backlighting', 'Programmable Keys', 'Aluminum Frame']
  },
  {
    id: '6',
    name: 'Artisan Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID protection and multiple card slots.',
    price: 79.99,
    category: 'Fashion',
    stock: 20,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.4,
    reviews: 98,
    features: ['Genuine Leather', 'RFID Protection', '8 Card Slots', 'Compact Design']
  },
  {
    id: '7',
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    originalPrice: 59.99,
    category: 'Electronics',
    stock: 45,
    image: 'https://images.pexels.com/photos/4320458/pexels-photo-4320458.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4320458/pexels-photo-4320458.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4320461/pexels-photo-4320461.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.3,
    reviews: 189,
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Non-Slip Base'],
    isOnSale: true
  },
  {
    id: '8',
    name: 'Gourmet Tea Collection',
    description: 'Curated selection of premium teas from around the world, perfect for tea enthusiasts.',
    price: 49.99,
    category: 'Food & Beverages',
    stock: 35,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1638281/pexels-photo-1638281.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    rating: 4.8,
    reviews: 142,
    features: ['12 Tea Varieties', 'Premium Quality', 'Gift Box Included', 'Loose Leaf']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Food & Beverages',
  'Sports & Outdoors',
  'Fashion'
];