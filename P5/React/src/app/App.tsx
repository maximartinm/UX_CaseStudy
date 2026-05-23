import { BrowserRouter, Routes, Route } from 'react-router';
import InicioHome from './components/InicioHome';
import Carrito from './components/Carrito';
import Tienda from './components/Tienda';
import Espacios from './components/Espacios';
import Nosotros from './components/Nosotros';
import Buscar from './components/Buscar';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicioHome />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/espacios" element={<Espacios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/compra" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}