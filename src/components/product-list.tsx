import { TProduct } from '../types/product';
import { ProductCard } from './product-card';

type TProductListProps = {
  products: TProduct[];
};

export function ProductList({ products }: TProductListProps) {
  return (
    <div className="cards catalog__cards">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
