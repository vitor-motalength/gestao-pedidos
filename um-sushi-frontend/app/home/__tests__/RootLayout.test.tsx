import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

describe('RootLayout', () => {
  it('deve renderizar o conteúdo passado via children e aplicar as classes corretamente', () => {
    // Executa o layout manualmente
    const layout = RootLayout({ children: <p>Conteúdo de teste</p> });

    // Extrai o <body> de dentro do layout
    const bodyElement = layout.props.children;

    // Cria um componente que renderiza o <body> manualmente
    const BodyWrapper = () => (
      <div className={bodyElement.props.className}>
        {bodyElement.props.children}
      </div>
    );

    const { container } = render(<BodyWrapper />);

    // Verificações
    expect(screen.getByText(/conteúdo de teste/i)).toBeInTheDocument();

    const div = container.querySelector('div');
    expect(div).not.toBeNull();
    expect(div?.className).toContain('--font-geist-sans');
    expect(div?.className).toContain('--font-geist-mono');
    expect(div?.className).toContain('antialiased');
  });
});