import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';
import Registration from './pages/Registration/Registration';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;