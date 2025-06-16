import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('deve exibir a mensagem Hello UM Sushi', () => {
    render(<HomePage />);
    expect(screen.getByText(/hello um sushi/i)).toBeInTheDocument();
  });
});