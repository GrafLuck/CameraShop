import { render, screen } from '@testing-library/react';
import { makeFakeProduct } from '../../utils/mocks';
import { TProduct } from '../../types/product';
import { ProductList } from './product-list';

describe('Component: ProductList', () => {
  it('should render correctly', () => {
    const expectedCount = 10;
    const productListTestId = 'product-list';
    // const productItemTestId = 'product-item';
    const products = new Array(expectedCount)
      .fill(null)
      .map(() => makeFakeProduct()) as unknown as TProduct[];

    render(<ProductList products={products} />);

    const productList = screen.getByTestId(productListTestId);
    // const productItem = screen.getAllByTestId(productListTestId);

    expect(productList).toBeInTheDocument();
    // expect(productItem.length).toBe(expectedCount);
  });
});
