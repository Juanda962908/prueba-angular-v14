import { v4 as uuidv4 } from "uuid";

export const newProductsHelper = () => (
  {
    _id: uuidv4(),
    description: 'Descripción aleatoria',
    images: ['assets/soldaut.jpg'],
    inStock: Math.floor(Math.random() * 100) + 1,
    price: parseFloat((Math.random() * 100).toFixed(2)),
    sizes: ['S', 'M', 'L'],
    slug: 'slug-aleatorio',
    tags: ['tag1', 'tag2'],
    title: 'Producto nuevo',
    type: 'Tipo aleatorio',
    gender: 'Género aleatorio',
    __v: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
)
