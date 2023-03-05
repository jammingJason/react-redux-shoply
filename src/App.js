import logo from './logo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact="true" path="/" element={<ShoppingCart />} />
            <Route
              exact="true"
              path="/products/:id"
              element={<ItemDetails />}
            />
            <Route exact="true" path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
