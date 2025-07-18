import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import CompactLanguageSelector from "@/components/CompactLanguageSelector";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  
  const handleGoogleLogin = () => {
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  const handleMicrosoftLogin = () => {
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  const handleGoogleSignUp = () => {
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  const handleMicrosoftSignUp = () => {
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  const handleDemoMode = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Language Selector */}
      <div className="absolute top-4 right-4">
        <CompactLanguageSelector />
      </div>
      
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block hover:scale-105 transition-transform duration-300">
            <Logo />
          </Link>
        </div>

        {/* Login Card */}
        <Card className="shadow-soft hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-deep-navy">{t('login.welcome')}</CardTitle>
            <p className="text-slate-gray">{t('login.subtitle')}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full h-12 text-base border-2 hover:scale-[1.02] transition-all duration-200 hover:shadow-md" 
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {t('login.google')}
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-base border-2 hover:scale-[1.02] transition-all duration-200 hover:shadow-md" 
              onClick={handleMicrosoftLogin}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z"/>
                <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                <path fill="#7fba00" d="M1 13h10v10H1z"/>
                <path fill="#ffb900" d="M13 13h10v10H13z"/>
              </svg>
              {t('login.microsoft')}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button 
              className="w-full h-12 text-base bg-gradient-primary hover:opacity-90 transition-all duration-200 hover:scale-[1.02] shadow-button"
              onClick={handleDemoMode}
            >
              {t('login.demo')}
            </Button>

            <div className="text-center mt-6">
              <p className="text-sm text-slate-gray mb-3">
                {t('login.terms')}
              </p>
              <Button 
                variant="ghost" 
                className="text-sm text-primary font-medium hover:bg-primary/10 transition-colors p-2 h-auto"
                onClick={() => setShowSignUpModal(true)}
              >
                {t('login.createaccount')}
              </Button>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="text-primary hover:underline text-sm">
                {t('login.backhome')}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sign Up Modal */}
      <Dialog open={showSignUpModal} onOpenChange={setShowSignUpModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-deep-navy text-center">
              {t('signup.welcome')}
            </DialogTitle>
            <p className="text-slate-gray text-center">{t('signup.subtitle')}</p>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <Button 
              variant="outline" 
              className="w-full h-12 text-base border-2 hover:scale-[1.02] transition-all duration-200 hover:shadow-md" 
              onClick={handleGoogleSignUp}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {t('signup.google')}
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-base border-2 hover:scale-[1.02] transition-all duration-200 hover:shadow-md" 
              onClick={handleMicrosoftSignUp}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z"/>
                <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                <path fill="#7fba00" d="M1 13h10v10H1z"/>
                <path fill="#ffb900" d="M13 13h10v10H13z"/>
              </svg>
              {t('signup.microsoft')}
            </Button>

            <div className="text-center mt-6">
              <p className="text-sm text-slate-gray">
                {t('signup.terms')}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;