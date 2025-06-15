import { render, screen } from '@testing-library/react';
import IndexPage from '../page';

describe('IndexPage', () => {
  it('deve renderizar o título corretamente', () => {
    render(<IndexPage />);
    expect(screen.getByRole('heading', { name: /bem-vindo ao um sushi frontend/i })).toBeInTheDocument();
  });

  it('deve conter um link para /home', () => {
    render(<IndexPage />);
    const link = screen.getByRole('link', { name: /ir para hello um sushi/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
  });
});