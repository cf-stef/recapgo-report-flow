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
    'landing.hero.badge': 'Save 3+ hours per week on reports',
    'landing.hero.title': 'From Meeting',
    'landing.hero.subtitle': 'to Report in 60 Seconds',
    'landing.hero.description': 'Stop wasting hours writing meeting notes. Our AI transforms your conversations into professional business reports instantly.',
    'landing.hero.cta': 'Start Free - Get €2.50 Credit',
    'landing.hero.nocardreq': 'No card required • 3 minutes to first report',
    
    // Dashboard
    'dashboard.balance': 'Current Balance',
    'dashboard.topup': 'Top Up',
    'dashboard.upload': 'Upload Audio',
    'dashboard.record': 'Record Audio',
    'dashboard.recording': 'Recording... (Max 4 hours)',
    'dashboard.clickstart': 'Click to start',
    'dashboard.maxtime': 'Maximum recording time reached',
    'dashboard.sendemail': 'Send report to:',
    'dashboard.processing': 'Turning your meeting into magic...',
    'dashboard.success': 'Your report is on its way!',
    'dashboard.reportsent': 'Report successfully sent to',
    
    // Login
    'login.welcome': 'Welcome Back',
    'login.subtitle': 'Get started with your work email',
    'login.google': 'Continue with Google',
    'login.microsoft': 'Continue with Microsoft',
    'login.demo': 'Try Demo Mode',
    'login.terms': 'By continuing, you agree to our Terms of Service and Privacy Policy',
    'login.backhome': '← Back to homepage',
  },
  nl: {
    // Navigation
    'nav.signin': 'Inloggen',
    'nav.logout': 'Uitloggen',
    
    // Landing Page
    'landing.hero.badge': 'Bespaar 3+ uur per week op rapporten',
    'landing.hero.title': 'Van Vergadering',
    'landing.hero.subtitle': 'naar Rapport in 60 Seconden',
    'landing.hero.description': 'Stop met het verspillen van uren aan het schrijven van vergadernotities. Onze AI transformeert uw gesprekken direct in professionele bedrijfsrapporten.',
    'landing.hero.cta': 'Start Gratis - Krijg €2,50 Tegoed',
    'landing.hero.nocardreq': 'Geen kaart vereist • 3 minuten tot eerste rapport',
    
    // Dashboard
    'dashboard.balance': 'Huidig Saldo',
    'dashboard.topup': 'Bijladen',
    'dashboard.upload': 'Audio Uploaden',
    'dashboard.record': 'Audio Opnemen',
    'dashboard.recording': 'Opname... (Max 4 uur)',
    'dashboard.clickstart': 'Klik om te starten',
    'dashboard.maxtime': 'Maximale opnametijd bereikt',
    'dashboard.sendemail': 'Rapport versturen naar:',
    'dashboard.processing': 'Uw vergadering wordt omgezet in magie...',
    'dashboard.success': 'Uw rapport is onderweg!',
    'dashboard.reportsent': 'Rapport succesvol verzonden naar',
    
    // Login
    'login.welcome': 'Welkom Terug',
    'login.subtitle': 'Begin met uw werk e-mail',
    'login.google': 'Doorgaan met Google',
    'login.microsoft': 'Doorgaan met Microsoft',
    'login.demo': 'Probeer Demo Modus',
    'login.terms': 'Door door te gaan, gaat u akkoord met onze Servicevoorwaarden en Privacybeleid',
    'login.backhome': '← Terug naar homepage',
  },
  fr: {
    // Navigation
    'nav.signin': 'Se Connecter',
    'nav.logout': 'Déconnexion',
    
    // Landing Page
    'landing.hero.badge': 'Économisez 3+ heures par semaine sur les rapports',
    'landing.hero.title': 'De la Réunion',
    'landing.hero.subtitle': 'au Rapport en 60 Secondes',
    'landing.hero.description': 'Arrêtez de perdre des heures à écrire des notes de réunion. Notre IA transforme vos conversations en rapports d\'affaires professionnels instantanément.',
    'landing.hero.cta': 'Commencer Gratuitement - Obtenez 2,50€ de Crédit',
    'landing.hero.nocardreq': 'Aucune carte requise • 3 minutes au premier rapport',
    
    // Dashboard
    'dashboard.balance': 'Solde Actuel',
    'dashboard.topup': 'Recharger',
    'dashboard.upload': 'Télécharger Audio',
    'dashboard.record': 'Enregistrer Audio',
    'dashboard.recording': 'Enregistrement... (Max 4 heures)',
    'dashboard.clickstart': 'Cliquez pour commencer',
    'dashboard.maxtime': 'Temps d\'enregistrement maximum atteint',
    'dashboard.sendemail': 'Envoyer le rapport à:',
    'dashboard.processing': 'Transformation de votre réunion en magie...',
    'dashboard.success': 'Votre rapport est en route!',
    'dashboard.reportsent': 'Rapport envoyé avec succès à',
    
    // Login
    'login.welcome': 'Bon Retour',
    'login.subtitle': 'Commencez avec votre email professionnel',
    'login.google': 'Continuer avec Google',
    'login.microsoft': 'Continuer avec Microsoft',
    'login.demo': 'Essayer le Mode Démo',
    'login.terms': 'En continuant, vous acceptez nos Conditions de Service et Politique de Confidentialité',
    'login.backhome': '← Retour à l\'accueil',
  },
  de: {
    // Navigation
    'nav.signin': 'Anmelden',
    'nav.logout': 'Abmelden',
    
    // Landing Page
    'landing.hero.badge': 'Sparen Sie 3+ Stunden pro Woche bei Berichten',
    'landing.hero.title': 'Vom Meeting',
    'landing.hero.subtitle': 'zum Bericht in 60 Sekunden',
    'landing.hero.description': 'Hören Sie auf, Stunden mit dem Schreiben von Besprechungsnotizen zu verschwenden. Unsere KI verwandelt Ihre Gespräche sofort in professionelle Geschäftsberichte.',
    'landing.hero.cta': 'Kostenlos Starten - Erhalten Sie 2,50€ Guthaben',
    'landing.hero.nocardreq': 'Keine Karte erforderlich • 3 Minuten zum ersten Bericht',
    
    // Dashboard
    'dashboard.balance': 'Aktuelles Guthaben',
    'dashboard.topup': 'Aufladen',
    'dashboard.upload': 'Audio Hochladen',
    'dashboard.record': 'Audio Aufnehmen',
    'dashboard.recording': 'Aufnahme... (Max 4 Stunden)',
    'dashboard.clickstart': 'Klicken zum Starten',
    'dashboard.maxtime': 'Maximale Aufnahmezeit erreicht',
    'dashboard.sendemail': 'Bericht senden an:',
    'dashboard.processing': 'Ihr Meeting wird in Magie verwandelt...',
    'dashboard.success': 'Ihr Bericht ist unterwegs!',
    'dashboard.reportsent': 'Bericht erfolgreich gesendet an',
    
    // Login
    'login.welcome': 'Willkommen Zurück',
    'login.subtitle': 'Beginnen Sie mit Ihrer Arbeits-E-Mail',
    'login.google': 'Mit Google Fortfahren',
    'login.microsoft': 'Mit Microsoft Fortfahren',
    'login.demo': 'Demo-Modus Ausprobieren',
    'login.terms': 'Durch Fortfahren stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu',
    'login.backhome': '← Zurück zur Homepage',
  },
  es: {
    // Navigation
    'nav.signin': 'Iniciar Sesión',
    'nav.logout': 'Cerrar Sesión',
    
    // Landing Page
    'landing.hero.badge': 'Ahorre 3+ horas por semana en informes',
    'landing.hero.title': 'De la Reunión',
    'landing.hero.subtitle': 'al Informe en 60 Segundos',
    'landing.hero.description': 'Deje de perder horas escribiendo notas de reuniones. Nuestra IA transforma sus conversaciones en informes empresariales profesionales al instante.',
    'landing.hero.cta': 'Comenzar Gratis - Obtenga €2,50 de Crédito',
    'landing.hero.nocardreq': 'No se requiere tarjeta • 3 minutos al primer informe',
    
    // Dashboard
    'dashboard.balance': 'Saldo Actual',
    'dashboard.topup': 'Recargar',
    'dashboard.upload': 'Subir Audio',
    'dashboard.record': 'Grabar Audio',
    'dashboard.recording': 'Grabando... (Máx 4 horas)',
    'dashboard.clickstart': 'Haga clic para comenzar',
    'dashboard.maxtime': 'Tiempo máximo de grabación alcanzado',
    'dashboard.sendemail': 'Enviar informe a:',
    'dashboard.processing': 'Convirtiendo su reunión en magia...',
    'dashboard.success': '¡Su informe está en camino!',
    'dashboard.reportsent': 'Informe enviado exitosamente a',
    
    // Login
    'login.welcome': 'Bienvenido de Vuelta',
    'login.subtitle': 'Comience con su email de trabajo',
    'login.google': 'Continuar con Google',
    'login.microsoft': 'Continuar con Microsoft',
    'login.demo': 'Probar Modo Demo',
    'login.terms': 'Al continuar, acepta nuestros Términos de Servicio y Política de Privacidad',
    'login.backhome': '← Volver al inicio',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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