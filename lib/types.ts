export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  size?: string;
  color: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  authenticated: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author: string;
  publishedAt: string;
  image: string;
  readTime: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Review {
  _id: string;
  author: string;
  rating: number;
  text: string;
  verified: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  _id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'shipped' | 'delivered';
  createdAt: string;
  paymentMethod: 'stripe' | 'paypal';
}
