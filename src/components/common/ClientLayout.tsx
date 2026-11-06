'use client';

import React, { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { SearchModal } from './SearchModal';
import { BatchLookupModal } from './BatchLookupModal';
import { Toast } from './Toast';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBatchLookupOpen, setIsBatchLookupOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col justify-between selection:bg-[#E7B957]/30 selection:text-[#174C35]">
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenBatchLookup={() => setIsBatchLookupOpen(true)}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <BatchLookupModal
          isOpen={isBatchLookupOpen}
          onClose={() => setIsBatchLookupOpen(false)}
        />
        <Toast />
      </div>
    </CartProvider>
  );
};

