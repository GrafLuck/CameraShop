import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/mock-components';
import { Header } from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const { container } = renderWithRouter(<Header />);
    expect(screen.getByText('Каталог')).toBeInTheDocument();
    expect(screen.getByText('Гарантии')).toBeInTheDocument();
    expect(screen.getByText('Доставка')).toBeInTheDocument();
    expect(screen.getByText('О компании')).toBeInTheDocument();
    expect(
      container.querySelector('svg use')?.getAttribute('xlink:href')
    ).toEqual('#icon-logo');
  });
});
