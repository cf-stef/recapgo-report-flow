import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'nl' | 'fr' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.signin': 'Sign In',
    'nav.logout': 'Logout',
    
    // Landing Page
    'landing.hero.badge': 'Reclaim 3+ hours weekly from boring reports',
    'landing.hero.title': 'From Meeting',
    'landing.hero.subtitle': 'to Perfect Report in 60 Seconds',
    'landing.hero.description': 'Stop drowning in meeting notes. Our AI instantly transforms any conversation into executive-ready reports that impress.',
    'landing.hero.cta': 'Start Free - Claim €2.50 Credit',
    'landing.hero.nocardreq': 'No card required • Your first report in 3 minutes',
    
    // Dashboard
    'dashboard.balance': 'Account Balance',
    'dashboard.topup': 'Add Funds',
    'dashboard.upload': 'Upload Audio',
    'dashboard.record': 'Record Live',
    'dashboard.recording': 'Recording... (Max 4 hours)',
    'dashboard.clickstart': 'Hit record to begin',
    'dashboard.maxtime': 'Maximum recording time reached',
    'dashboard.sendemail': 'Deliver report to:',
    'dashboard.processing': 'Transforming your meeting into magic...',
    'dashboard.success': 'Your masterpiece is ready!',
    'dashboard.reportsent': 'Professional report delivered to',
    
    // Login
    'login.welcome': 'Welcome Back, Professional',
    'login.subtitle': 'Ready to turn meetings into magic?',
    'login.google': 'Continue with Google',
    'login.microsoft': 'Continue with Microsoft',
    'login.demo': 'Try Demo Mode',
    'login.createaccount': 'New here? Your first report is on us - just sign up!',
    'login.terms': 'By continuing, you agree to our Terms of Service and Privacy Policy',
    'login.backhome': '← Back to homepage',
    
    // Sign Up
    'signup.welcome': 'Create Your Account',
    'signup.subtitle': 'Join professionals who save 3+ hours weekly',
    'signup.google': 'Sign up with Google',
    'signup.microsoft': 'Sign up with Microsoft',
    'signup.terms': 'By signing up, you agree to our Terms of Service and Privacy Policy',
  },
  nl: {
    // Navigation
    'nav.signin': 'Inloggen',
    'nav.logout': 'Uitloggen',
    
    // Landing Page
    'landing.hero.badge': 'Win wekelijks 3+ uren terug van saaie rapporten',
    'landing.hero.title': 'Van Vergadering',
    'landing.hero.subtitle': 'naar Perfect Rapport in 60 Seconden',
    'landing.hero.description': 'Stop met verdrinken in vergadernotities. Onze AI transformeert elk gesprek direct in indrukwekkende professionele rapporten.',
    'landing.hero.cta': 'Start Gratis - Claim €2,50 Tegoed',
    'landing.hero.nocardreq': 'Geen kaart vereist • Uw eerste rapport in 3 minuten',
    
    // Dashboard
    'dashboard.balance': 'Account Saldo',
    'dashboard.topup': 'Saldo Aanvullen',
    'dashboard.upload': 'Audio Uploaden',
    'dashboard.record': 'Live Opnemen',
    'dashboard.recording': 'Opname... (Max 4 uur)',
    'dashboard.clickstart': 'Druk op opname om te beginnen',
    'dashboard.maxtime': 'Maximale opnametijd bereikt',
    'dashboard.sendemail': 'Rapport bezorgen aan:',
    'dashboard.processing': 'Uw vergadering wordt omgetoverd tot magie...',
    'dashboard.success': 'Uw meesterwerk is klaar!',
    'dashboard.reportsent': 'Professioneel rapport bezorgd aan',
    
    // Login
    'login.welcome': 'Welkom Terug, Professional',
    'login.subtitle': 'Klaar om vergaderingen om te toveren?',
    'login.google': 'Doorgaan met Google',
    'login.microsoft': 'Doorgaan met Microsoft',
    'login.demo': 'Probeer Demo Modus',
    'login.createaccount': 'Nieuw hier? Uw eerste rapport is gratis - registreer gewoon!',
    'login.terms': 'Door door te gaan, gaat u akkoord met onze Servicevoorwaarden en Privacybeleid',
    'login.backhome': '← Terug naar homepage',
    
    // Sign Up
    'signup.welcome': 'Maak Uw Account',
    'signup.subtitle': 'Word lid van professionals die wekelijks 3+ uur besparen',
    'signup.google': 'Registreren met Google',
    'signup.microsoft': 'Registreren met Microsoft',
    'signup.terms': 'Door te registreren gaat u akkoord met onze Servicevoorwaarden en Privacybeleid',
  },
  fr: {
    // Navigation
    'nav.signin': 'Se Connecter',
    'nav.logout': 'Déconnexion',
    
    // Landing Page
    'landing.hero.badge': 'Récupérez 3+ heures par semaine des rapports ennuyeux',
    'landing.hero.title': 'De la Réunion',
    'landing.hero.subtitle': 'au Rapport Parfait en 60 Secondes',
    'landing.hero.description': 'Arrêtez de vous noyer dans les notes de réunion. Notre IA transforme instantanément toute conversation en rapports professionnels impressionnants.',
    'landing.hero.cta': 'Commencer Gratuitement - Réclamez 2,50€ de Crédit',
    'landing.hero.nocardreq': 'Aucune carte requise • Votre premier rapport en 3 minutes',
    
    // Dashboard
    'dashboard.balance': 'Solde du Compte',
    'dashboard.topup': 'Ajouter des Fonds',
    'dashboard.upload': 'Télécharger Audio',
    'dashboard.record': 'Enregistrer en Direct',
    'dashboard.recording': 'Enregistrement... (Max 4 heures)',
    'dashboard.clickstart': 'Appuyez sur enregistrer pour commencer',
    'dashboard.maxtime': 'Temps d\'enregistrement maximum atteint',
    'dashboard.sendemail': 'Livrer le rapport à:',
    'dashboard.processing': 'Transformation de votre réunion en magie...',
    'dashboard.success': 'Votre chef-d\'œuvre est prêt!',
    'dashboard.reportsent': 'Rapport professionnel livré à',
    
    // Login
    'login.welcome': 'Bon Retour, Professionnel',
    'login.subtitle': 'Prêt à transformer les réunions en magie?',
    'login.google': 'Continuer avec Google',
    'login.microsoft': 'Continuer avec Microsoft',
    'login.demo': 'Essayer le Mode Démo',
    'login.createaccount': 'Nouveau ici? Votre premier rapport est offert - inscrivez-vous!',
    'login.terms': 'En continuant, vous acceptez nos Conditions de Service et Politique de Confidentialité',
    'login.backhome': '← Retour à l\'accueil',
    
    // Sign Up
    'signup.welcome': 'Créez Votre Compte',
    'signup.subtitle': 'Rejoignez les professionnels qui économisent 3+ heures par semaine',
    'signup.google': 'S\'inscrire avec Google',
    'signup.microsoft': 'S\'inscrire avec Microsoft',
    'signup.terms': 'En vous inscrivant, vous acceptez nos Conditions de Service et Politique de Confidentialité',
  },
  de: {
    // Navigation
    'nav.signin': 'Anmelden',
    'nav.logout': 'Abmelden',
    
    // Landing Page
    'landing.hero.badge': 'Gewinnen Sie wöchentlich 3+ Stunden von langweiligen Berichten zurück',
    'landing.hero.title': 'Vom Meeting',
    'landing.hero.subtitle': 'zum Perfekten Bericht in 60 Sekunden',
    'landing.hero.description': 'Hören Sie auf, in Besprechungsnotizen zu ertrinken. Unsere KI verwandelt jedes Gespräch sofort in beeindruckende professionelle Berichte.',
    'landing.hero.cta': 'Kostenlos Starten - 2,50€ Guthaben Sichern',
    'landing.hero.nocardreq': 'Keine Karte erforderlich • Ihr erster Bericht in 3 Minuten',
    
    // Dashboard
    'dashboard.balance': 'Konto-Guthaben',
    'dashboard.topup': 'Guthaben Hinzufügen',
    'dashboard.upload': 'Audio Hochladen',
    'dashboard.record': 'Live Aufnehmen',
    'dashboard.recording': 'Aufnahme... (Max 4 Stunden)',
    'dashboard.clickstart': 'Aufnahme drücken zum Beginnen',
    'dashboard.maxtime': 'Maximale Aufnahmezeit erreicht',
    'dashboard.sendemail': 'Bericht liefern an:',
    'dashboard.processing': 'Ihr Meeting wird in Magie verwandelt...',
    'dashboard.success': 'Ihr Meisterwerk ist bereit!',
    'dashboard.reportsent': 'Professioneller Bericht geliefert an',
    
    // Login
    'login.welcome': 'Willkommen Zurück, Profi',
    'login.subtitle': 'Bereit, Meetings in Magie zu verwandeln?',
    'login.google': 'Mit Google Fortfahren',
    'login.microsoft': 'Mit Microsoft Fortfahren',
    'login.demo': 'Demo-Modus Ausprobieren',
    'login.createaccount': 'Neu hier? Ihr erster Bericht ist kostenlos - registrieren Sie sich einfach!',
    'login.terms': 'Durch Fortfahren stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu',
    'login.backhome': '← Zurück zur Homepage',
    
    // Sign Up
    'signup.welcome': 'Erstellen Sie Ihr Konto',
    'signup.subtitle': 'Werden Sie Teil der Profis, die wöchentlich 3+ Stunden sparen',
    'signup.google': 'Mit Google Registrieren',
    'signup.microsoft': 'Mit Microsoft Registrieren',
    'signup.terms': 'Durch die Registrierung stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu',
  },
  es: {
    // Navigation
    'nav.signin': 'Iniciar Sesión',
    'nav.logout': 'Cerrar Sesión',
    
    // Landing Page
    'landing.hero.badge': 'Recupere 3+ horas semanales de informes aburridos',
    'landing.hero.title': 'De la Reunión',
    'landing.hero.subtitle': 'al Informe Perfecto en 60 Segundos',
    'landing.hero.description': 'Deje de ahogarse en notas de reuniones. Nuestra IA transforma instantáneamente cualquier conversación en informes profesionales impresionantes.',
    'landing.hero.cta': 'Comenzar Gratis - Reclame €2,50 de Crédito',
    'landing.hero.nocardreq': 'No se requiere tarjeta • Su primer informe en 3 minutos',
    
    // Dashboard
    'dashboard.balance': 'Saldo de Cuenta',
    'dashboard.topup': 'Agregar Fondos',
    'dashboard.upload': 'Subir Audio',
    'dashboard.record': 'Grabar en Vivo',
    'dashboard.recording': 'Grabando... (Máx 4 horas)',
    'dashboard.clickstart': 'Presione grabar para comenzar',
    'dashboard.maxtime': 'Tiempo máximo de grabación alcanzado',
    'dashboard.sendemail': 'Entregar informe a:',
    'dashboard.processing': 'Transformando su reunión en magia...',
    'dashboard.success': '¡Su obra maestra está lista!',
    'dashboard.reportsent': 'Informe profesional entregado a',
    
    // Login
    'login.welcome': 'Bienvenido de Vuelta, Profesional',
    'login.subtitle': '¿Listo para convertir reuniones en magia?',
    'login.google': 'Continuar con Google',
    'login.microsoft': 'Continuar con Microsoft',
    'login.demo': 'Probar Modo Demo',
    'login.createaccount': '¿Nuevo aquí? Su primer informe es gratis - ¡solo regístrese!',
    'login.terms': 'Al continuar, acepta nuestros Términos de Servicio y Política de Privacidad',
    'login.backhome': '← Volver al inicio',
    
    // Sign Up
    'signup.welcome': 'Cree Su Cuenta',
    'signup.subtitle': 'Únase a profesionales que ahorran 3+ horas semanalmente',
    'signup.google': 'Registrarse con Google',
    'signup.microsoft': 'Registrarse con Microsoft',
    'signup.terms': 'Al registrarse, acepta nuestros Términos de Servicio y Política de Privacidad',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};