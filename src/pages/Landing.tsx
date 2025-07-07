import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, FileText, Mail, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-6">
            Just Record and Go.
          </h1>
          <p className="text-xl md:text-2xl text-slate-gray mb-8 max-w-2xl mx-auto">
            Turn your meetings into business-ready reports — effortlessly.
          </p>
          <Link to="/login">
            <Button size="lg" className="text-lg px-8 py-6 shadow-button hover:shadow-lg transition-all">
              Try it Free – Get €2,50 Credit
            </Button>
          </Link>
          
          {/* Hero Illustration Placeholder */}
          <div className="mt-12 bg-white rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-slate-gray">Record Meeting</p>
              </div>
              <div className="text-2xl text-primary">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-slate-gray">AI Generated Report</p>
              </div>
              <div className="text-2xl text-primary">→</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-slate-gray">Delivered to Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-2">
                Step 1: Record or Upload
              </h3>
              <p className="text-slate-gray">
                Simply record your meeting live or upload an existing audio file
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-2">
                Step 2: AI Generates Full Report
              </h3>
              <p className="text-slate-gray">
                Our AI creates a complete business report with summary and details
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-deep-navy mb-2">
                Step 3: Delivered Instantly to Your Inbox
              </h3>
              <p className="text-slate-gray">
                Get your polished .docx file sent directly to your email
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Save Hours Every Week
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-deep-navy">Save hours every week</h3>
                  <p className="text-slate-gray">No more manual note-taking or report writing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-deep-navy">No more typing</h3>
                  <p className="text-slate-gray">Just speak and let AI do the work</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-deep-navy">Consistent documentation</h3>
                  <p className="text-slate-gray">Professional reports every time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-deep-navy">Works on desktop & mobile</h3>
                  <p className="text-slate-gray">Record from anywhere, anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Users Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
          Perfect For
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-deep-navy">Consultants</h3>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-deep-navy">Account Managers</h3>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-deep-navy">Field Service Professionals</h3>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-deep-navy">Internal Teams</h3>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-deep-navy mb-12">
            Simple, Fair Pricing
          </h2>
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">€0,89</div>
              <p className="text-slate-gray mb-6">per hour of audio</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Pay-per-use</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Stripe top-up system</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Auto top-up for power users</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>No monthly fees</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-deep-navy mb-6">
          Just Record and Go.
        </h2>
        <p className="text-xl text-slate-gray mb-8 max-w-2xl mx-auto">
          Stop spending hours on meeting notes. Start getting professional reports instantly.
        </p>
        <Link to="/login">
          <Button size="lg" className="text-lg px-8 py-6 shadow-button hover:shadow-lg transition-all">
            Start Free Now
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-deep-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">RecapGo</p>
          <p className="text-sm opacity-75">© 2024 RecapGo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;