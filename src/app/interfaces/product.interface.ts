export interface IProduct  {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: string[];
  slug: string;
  tags: string[];
  title: string;
  type: string;
  gender: string;
  __v: number;
  createdAt?: string;
  updatedAt?: string;
};
