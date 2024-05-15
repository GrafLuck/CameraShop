import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/mock-components';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedText = '404 Not Found';
    const expectedLinkText = 'main page';

    renderWithRouter(<NotFoundPage />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });

  //   it('should link correctly', async () => {
  //     const expectedLinkText = 'main page';

  //     const { user } = renderWithRouter(<NotFoundPage />);

  //     await user.click(screen.getByText(expectedLinkText));

  //     expect(screen.getByTestId('catalog-page')).toBeInTheDocument();
  //   });
});
