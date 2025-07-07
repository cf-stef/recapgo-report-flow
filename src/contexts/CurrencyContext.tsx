import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'USD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatCurrency: (amount: number) => string;
  getCurrencySymbol: () => string;
  convertFromEUR: (eurAmount: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Simple conversion rate - in real app, you'd fetch from an API
const EUR_TO_USD_RATE = 1.1;

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      const saved = localStorage.getItem('currency');
      console.log('CurrencyProvider initializing, saved value:', saved);
      const defaultCurrency = (saved as Currency) || 'EUR'; // Default to EUR
      console.log('CurrencyProvider using currency:', defaultCurrency);
      return defaultCurrency;
    } catch (error) {
      console.log('CurrencyProvider localStorage error:', error);
      return 'EUR'; // Fallback to EUR if localStorage fails
    }
  });

  const handleSetCurrency = (curr: Currency) => {
    console.log('Setting currency to:', curr);
    setCurrency(curr);
    try {
      localStorage.setItem('currency', curr);
      console.log('Currency saved to localStorage:', curr);
    } catch (error) {
      console.error('Failed to save currency to localStorage:', error);
    }
  };

  const formatCurrency = (amount: number): string => {
    const convertedAmount = convertFromEUR(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedAmount);
  };

  const getCurrencySymbol = (): string => {
    return currency === 'USD' ? '$' : '€';
  };

  const convertFromEUR = (eurAmount: number): number => {
    return currency === 'USD' ? eurAmount * EUR_TO_USD_RATE : eurAmount;
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleSetCurrency,
      formatCurrency,
      getCurrencySymbol,
      convertFromEUR,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};