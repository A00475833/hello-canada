import { render, screen, article } from '@testing-library/react';
import List from '../list';

test('0 data render', () => {
    const { container } = render(<List data={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
});

