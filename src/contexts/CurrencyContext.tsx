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
  const [currency, setCurrency] = useState<Currency>('EUR');

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
      setCurrency,
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