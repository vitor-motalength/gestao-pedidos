import './globals.css';
import { CarrinhoProvider } from '../context/CarrinhoContext';

export const metadata = {
  title: 'Sushi App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <CarrinhoProvider>
          {children}
        </CarrinhoProvider>
      </body>
    </html>
  );
}
