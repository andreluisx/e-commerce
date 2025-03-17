import imagem from '../images/iphone.jpg';
import galaxy from '../images/galaxy.jpg';
import xiaomi from '../images/xiaomi.jpg';
import pixel from '../images/pixel.jpg';

export default [
  {
    id: 1,
    img: [imagem, galaxy],
    name: 'Apple Iphone 16 512gb - Azul',
    stars: 3.6,
    reviews: 358,
    price_total: 2700,
    promotional_price: 2456.55,
    parcel: 10,
  },
  {
    id: 2,
    img: [galaxy, imagem],
    name: 'Samsung Galaxy S24 Ultra 1TB - Preto',
    stars: 4.2,
    reviews: 425,
    price_total: 3200,
    promotional_price: 2899.99,
    parcel: 12,
  },
  {
    id: 3,
    img: [xiaomi, imagem],
    name: 'Xiaomi 14 Pro 256GB - Titanium',
    stars: 4.0,
    reviews: 287,
    price_total: 2100,
    promotional_price: 1899.90,
    parcel: 8,
  },
  {
    id: 4,
    img: [pixel, imagem],
    name: 'Google Pixel 8 Pro 512GB - Obsidian',
    stars: 4.5,
    reviews: 312,
    price_total: 2800,
    promotional_price: 2599.99,
    parcel: 10,
  },
];