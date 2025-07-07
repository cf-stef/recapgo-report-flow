import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const CompactLanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, flag: '🇺🇸' },
    { code: 'nl' as Language, flag: '🇳🇱' },
    { code: 'fr' as Language, flag: '🇫🇷' },
    { code: 'de' as Language, flag: '🇩🇪' },
    { code: 'es' as Language, flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-12 h-8 p-1 bg-white/80 backdrop-blur-sm border-electric-blue/20 hover:bg-white/90 transition-colors">
        <SelectValue>
          <span className="text-lg">{currentLanguage?.flag}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              {lang.flag} {lang.code.toUpperCase()}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CompactLanguageSelector;