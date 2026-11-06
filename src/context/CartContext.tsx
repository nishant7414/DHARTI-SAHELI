'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('dharti_saheli_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem('dharti_saheli_cart', JSON.stringify(items));
      } catch (e) {
        console.error('Failed to save cart to localStorage', e);
      }
    }
  }, [items, isInitialized]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3800);
  };

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.sku === newItem.sku);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prevItems, newItem];
    });
    triggerToast(`Added ${newItem.quantity}x ${newItem.productName} (${newItem.selectedSize}) to cart!`);
    setIsCartOpen(true);
  };

  const removeItem = (sku: string) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.sku === sku);
      if (item) {
        triggerToast(`Removed ${item.productName} (${item.selectedSize}) from cart.`);
      }
      return prevItems.filter((i) => i.sku !== sku);
    });
  };

  const updateQuantity = (sku: string, delta: number) => {
    setItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.sku === sku) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const clearToast = () => setToastMessage(null);

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Delivery rules: Flat ₹50 for orders under ₹499, Free delivery for orders ≥ ₹499
  const deliveryFee = items.length === 0 ? 0 : subtotal >= 499 ? 0 : 50;

  // Promo code discounts
  let discount = 0;
  if (appliedPromo === 'ORGANIC10') {
    discount = Math.round(subtotal * 0.1);
  } else if (appliedPromo === 'DHARTI2026') {
    discount = Math.min(100, Math.round(subtotal * 0.15));
  }

  const total = Math.max(0, subtotal - discount + deliveryFee);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const applyPromoCode = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ORGANIC10') {
      setAppliedPromo('ORGANIC10');
      triggerToast('Promo code ORGANIC10 applied: 10% discount on cart subtotal!');
      return { success: true, message: '10% discount applied successfully!' };
    }
    if (cleanCode === 'DHARTI2026') {
      setAppliedPromo('DHARTI2026');
      triggerToast('Promo code DHARTI2026 applied: 15% discount (up to ₹100)!');
      return { success: true, message: 'Special introductory discount applied!' };
    }
    return { success: false, message: 'Invalid promo code. Try "ORGANIC10" or "DHARTI2026".' };
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        discount,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        appliedPromo,
        applyPromoCode,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

