export interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  originalPrice?: number;
}

export interface CategorySection {
  name: string;
  items: ProductItem[];
}

export const CATEGORY_SECTIONS: CategorySection[] = [
  {
    name: 'Electronics',
    items: [
      {
        id: 1,
        name: 'Wireless Earbuds',
        price: 799.99,
        originalPrice: 999.99,
        image: 'https://picsum.photos/seed/earbuds/420/300',
        description: 'Lightweight earbuds with clear sound, noise reduction, and all-day battery life.',
        category: 'Electronics',
      },
      {
        id: 2,
        name: 'Smart Watch',
        price: 1299.99,
        image: 'https://picsum.photos/seed/smartwatch/420/300',
        description: 'Track workouts, heart rate, and daily activity with smart notifications on your wrist.',
        category: 'Electronics',
      },
      {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 649.99,
        originalPrice: 899.99,
        image: 'https://picsum.photos/seed/speaker/420/300',
        description: 'Portable speaker with rich bass and crisp audio for indoor and outdoor listening.',
        category: 'Electronics',
      },
      {
        id: 4,
        name: 'Power Bank',
        price: 349.99,
        image: 'https://picsum.photos/seed/powerbank/420/300',
        description: 'Fast-charging power bank to keep your devices powered on the go.',
        category: 'Electronics',
      },
    ],
  },
  {
    name: 'Fashion',
    items: [
      {
        id: 5,
        name: 'Classic Hoodie',
        price: 499.99,
        originalPrice: 699.99,
        image: 'https://picsum.photos/seed/hoodie/420/300',
        description: 'Soft everyday hoodie with a relaxed fit and premium cotton comfort.',
        category: 'Fashion',
      },
      {
        id: 6,
        name: 'Denim Jacket',
        price: 999.99,
        image: 'https://picsum.photos/seed/jacket/420/300',
        description: 'Timeless denim jacket styled for layering through every season.',
        category: 'Fashion',
      },
      {
        id: 7,
        name: 'Running Sneakers',
        price: 1149.99,
        image: 'https://picsum.photos/seed/sneakers/420/300',
        description: 'Responsive cushioning and breathable mesh for running and daily wear.',
        category: 'Fashion',
      },
      {
        id: 8,
        name: 'Leather Belt',
        price: 219.99,
        originalPrice: 299.99,
        image: 'https://picsum.photos/seed/belt/420/300',
        description: 'Durable leather belt with a polished buckle for smart-casual looks.',
        category: 'Fashion',
      },
    ],
  },
  {
    name: 'Home & Kitchen',
    items: [
      {
        id: 9,
        name: 'Non-stick Pan Set',
        price: 1249.99,
        originalPrice: 1499.99,
        image: 'https://picsum.photos/seed/panset/420/300',
        description: 'Multi-piece pan set designed for easy cooking and quick cleanup.',
        category: 'Home & Kitchen',
      },
      {
        id: 10,
        name: 'Electric Kettle',
        price: 499.99,
        image: 'https://picsum.photos/seed/kettle/420/300',
        description: 'Rapid-boil kettle with auto shut-off for daily convenience.',
        category: 'Home & Kitchen',
      },
      {
        id: 11,
        name: 'Storage Containers',
        price: 319.99,
        image: 'https://picsum.photos/seed/storage/420/300',
        description: 'Airtight containers to keep your pantry neat and ingredients fresh.',
        category: 'Home & Kitchen',
      },
      {
        id: 12,
        name: 'LED Desk Lamp',
        price: 399.99,
        image: 'https://picsum.photos/seed/lamp/420/300',
        description: 'Adjustable LED desk lamp with multiple brightness modes.',
        category: 'Home & Kitchen',
      },
    ],
  },
  {
    name: 'Beauty & Personal Care',
    items: [
      {
        id: 13,
        name: 'Hydrating Serum',
        price: 289.99,
        image: 'https://picsum.photos/seed/serum/420/300',
        description: 'Daily serum that helps retain moisture and support healthy-looking skin.',
        category: 'Beauty & Personal Care',
      },
      {
        id: 14,
        name: 'Daily Sunscreen',
        price: 189.99,
        originalPrice: 239.99,
        image: 'https://picsum.photos/seed/sunscreen/420/300',
        description: 'Lightweight sunscreen with broad-spectrum protection for everyday wear.',
        category: 'Beauty & Personal Care',
      },
      {
        id: 15,
        name: 'Hair Styling Kit',
        price: 449.99,
        originalPrice: 579.99,
        image: 'https://picsum.photos/seed/hairkit/420/300',
        description: 'All-in-one styling kit to shape, smooth, and finish your look.',
        category: 'Beauty & Personal Care',
      },
      {
        id: 16,
        name: 'Body Lotion',
        price: 169.99,
        image: 'https://picsum.photos/seed/lotion/420/300',
        description: 'Nourishing body lotion for soft and hydrated skin.',
        category: 'Beauty & Personal Care',
      },
    ],
  },
];

const productEntries: Array<[number, ProductItem]> = [];

for (const section of CATEGORY_SECTIONS) {
  for (const item of section.items) {
    productEntries.push([item.id, item]);
  }
}

const PRODUCT_INDEX = new Map<number, ProductItem>(productEntries);

export function findProductById(id: number): ProductItem | undefined {
  return PRODUCT_INDEX.get(id);
}

export function getDiscountPercent(item: ProductItem): number {
  if (!item.originalPrice || item.originalPrice <= item.price) {
    return 0;
  }

  return Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
}
