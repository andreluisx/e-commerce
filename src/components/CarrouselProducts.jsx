import ProductCard from "./ProductCard";
import products from "../dados/fourProducts";
import './styles.css'

export default function CarrouselProduct() {
  return (
    <div className="w-full px-4">
      <ul className="wrapperr">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
