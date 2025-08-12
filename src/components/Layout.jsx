import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Fab from './Fab';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Fab />
      <Footer />
    </div>
  );
}


