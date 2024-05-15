import { render } from '@testing-library/react';
import { RatingStar } from './rating-star';

describe('Component: RatingStar', () => {
  it('should render full star', () => {
    const isChecked = true;

    const { container } = render(<RatingStar isChecked={isChecked} />);

    expect(
      container.querySelector('svg use')?.getAttribute('xlink:href')
    ).toEqual('#icon-full-star');
  });

  it('should render empty star', () => {
    const isChecked = false;

    const { container } = render(<RatingStar isChecked={isChecked} />);

    expect(
      container.querySelector('svg use')?.getAttribute('xlink:href')
    ).toEqual('#icon-star');
  });
});
