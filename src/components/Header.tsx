import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "@/components/Logo";
import CompactLanguageSelector from "@/components/CompactLanguageSelector";

export default function Header() {
  const { t } = useLanguage();

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="hover:scale-105 transition-all duration-300">
              {t('nav.signin')}
            </Button>
          </Link>
          <CompactLanguageSelector />
        </div>
      </div>
    </nav>
  );
}