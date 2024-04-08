import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../item';

test('capital is not visible initially', () => {
    const testItem = { name: 'Nova Scotia', capital: 'Halifax', flagUrl: 'url' };
    render(<Item {...testItem} />);
    expect(screen.queryByText('Halifax')).toBeNull();
});

test('shows capital on button click', () => {
    const testItem = { name: 'Nova Scotia', capital: 'Halifax', flagUrl: 'url' };
    render(<Item {...testItem} />);
    fireEvent.click(screen.getByText('Show Capital'));
    expect(screen.getByText('Halifax')).toBeInTheDocument();
});

