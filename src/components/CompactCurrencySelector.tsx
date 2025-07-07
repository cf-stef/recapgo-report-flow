import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrency, Currency } from "@/contexts/CurrencyContext";
import { DollarSign, Euro } from "lucide-react";

const CompactCurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  const currencies = [
    { code: 'USD' as Currency, symbol: '$', icon: DollarSign },
    { code: 'EUR' as Currency, symbol: '€', icon: Euro },
  ];

  const currentCurrency = currencies.find(curr => curr.code === currency);
  const IconComponent = currentCurrency?.icon || Euro;

  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-12 h-8 p-1 bg-white/80 backdrop-blur-sm border-electric-blue/20 hover:bg-white/90 transition-colors">
        <SelectValue>
          <IconComponent className="w-4 h-4" />
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border border-electric-blue/20 shadow-lg z-50">
        {currencies.map((curr) => {
          const CurrIcon = curr.icon;
          return (
            <SelectItem key={curr.code} value={curr.code} className="hover:bg-sky-tint/20">
              <span className="flex items-center gap-2">
                <CurrIcon className="w-4 h-4" />
                {curr.code}
              </span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default CompactCurrencySelector;