import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import About from './views/About';
import Cart from './views/Cart';
import Catalog from './views/Catalog';
import Finish from './views/Finish';
import Home from './views/Home';
import Layout from './views/Layout';
import Stores from './views/Stores';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="store-list" element={<Stores />} />
          <Route path="store-catalog/:id" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="complete" element={<Finish />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
