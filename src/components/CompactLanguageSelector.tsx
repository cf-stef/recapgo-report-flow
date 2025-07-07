import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useCurrency, Currency } from "@/contexts/CurrencyContext";
import { DollarSign, Euro } from "lucide-react";

const CompactLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  const languages = [
    { code: 'en' as Language, flag: '🇺🇸' },
    { code: 'nl' as Language, flag: '🇳🇱' },
    { code: 'fr' as Language, flag: '🇫🇷' },
    { code: 'de' as Language, flag: '🇩🇪' },
    { code: 'es' as Language, flag: '🇪🇸' },
  ];

  const currencies = [
    { code: 'USD' as Currency, symbol: '$', icon: DollarSign },
    { code: 'EUR' as Currency, symbol: '€', icon: Euro },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const currentCurrency = currencies.find(curr => curr.code === currency);

  const handleValueChange = (value: string) => {
    // Check if it's a language code
    if (languages.some(lang => lang.code === value)) {
      setLanguage(value as Language);
    }
    // Check if it's a currency code
    else if (currencies.some(curr => curr.code === value)) {
      setCurrency(value as Currency);
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-16 h-8 p-1 bg-white/80 backdrop-blur-sm border-electric-blue/20 hover:bg-white/90 transition-colors">
        <SelectValue>
          <div className="flex items-center gap-1">
            <span className="text-sm">{currentLanguage?.flag}</span>
            {currentCurrency?.code === 'USD' ? (
              <DollarSign className="w-3 h-3" />
            ) : (
              <Euro className="w-3 h-3" />
            )}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border border-electric-blue/20 shadow-lg z-50">
        <div className="px-2 py-1 text-xs font-medium text-slate-gray">Language</div>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="hover:bg-sky-tint/20">
            <span className="flex items-center gap-2">
              {lang.flag} {lang.code.toUpperCase()}
            </span>
          </SelectItem>
        ))}
        <div className="border-t border-gray-200 my-1" />
        <div className="px-2 py-1 text-xs font-medium text-slate-gray">Currency</div>
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

export default CompactLanguageSelector;