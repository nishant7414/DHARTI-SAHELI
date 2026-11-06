'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Sparkles, X, CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useCart();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notifications"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#174C35]/95 backdrop-blur-xl text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#E7B957] flex items-center justify-center text-[#174C35] shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5 fill-[#174C35] text-[#E7B957]" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-white leading-relaxed">
            {toastMessage}
          </p>
          <div className="flex items-center gap-1.5 mt-1 text-[10px] text-[#E7B957] font-bold">
            <Sparkles className="w-3 h-3" />
            <span>&ldquo;Don&apos;t panic, it&apos;s organic.&rdquo;</span>
          </div>
        </div>
        <button
          onClick={clearToast}
          className="text-white/60 hover:text-white transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};

