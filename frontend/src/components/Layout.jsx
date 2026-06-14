import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollToTop from './ScrollToTop';
import PwaInstallBanner from './PwaInstallBanner';

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
      <PwaInstallBanner />
    </div>
  );
};

export default Layout;

