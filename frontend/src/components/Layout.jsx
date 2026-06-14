import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: '110px', flex: 1 }}>
        <Outlet />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Layout;
