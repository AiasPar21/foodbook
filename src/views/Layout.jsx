import { Outlet } from 'react-router-dom';

import 'external-svg-loader';

import DeliveryProvider from '@/store/DeliveryProvider';

import Header from '@/components/Header';

import './Layout.scoped.scss';
import './Layout.scss';

function Layout() {
  return (
    <DeliveryProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <aside />
      <footer />
    </DeliveryProvider>
  );
}

export default Layout;
