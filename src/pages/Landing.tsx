import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, FileText, Mail, Users, Clock, CheckCircle, Zap, Timer, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Logo />
          <Link to="/login">
            <Button variant="outline" className="hover:scale-105 transition-all duration-300">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-deep-navy mb-8 border border-electric-blue/20">
              <Timer className="w-4 h-4 text-primary" />
              Save 3+ hours per week on reports
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-deep-navy mb-6 leading-tight">
              From Meeting
              <span className="block text-transparent bg-clip-text bg-gradient-primary">
                to Report in 60 Seconds
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop wasting hours writing meeting notes. Our AI transforms your conversations 
              into professional business reports instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="text-base sm:text-lg px-8 py-4 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-button group w-full sm:w-auto"
                >
                  Start Free - Get €2.50 Credit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-sm text-slate-gray">No card required • 3 minutes to first report</p>
            </div>
          </div>
          
          {/* Hero Visual Flow - Mobile Optimized */}
          <div className="animate-fade-in bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft p-6 sm:p-8 max-w-4xl mx-auto border border-electric-blue/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm sm:text-base font-medium text-deep-navy">Record or Upload</p>
                <p className="text-xs text-slate-gray">Any audio format</p>
              </div>
              
              <div className="hidden sm:block">
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="sm:hidden">
                <div className="w-1 h-8 bg-gradient-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm sm:text-base font-medium text-deep-navy">AI Processing</p>
                <p className="text-xs text-slate-gray">Under 60 seconds</p>
              </div>
              
              <div className="hidden sm:block">
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="sm:hidden">
                <div className="w-1 h-8 bg-gradient-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm sm:text-base font-medium text-deep-navy">Professional Report</p>
                <p className="text-xs text-slate-gray">Delivered to email</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
            Three Simple Steps
          </h2>
          <p className="text-lg sm:text-xl text-slate-gray max-w-2xl mx-auto">
            From messy meeting to polished report in under 60 seconds
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">
                  Record or Upload
                </h3>
                <p className="text-slate-gray leading-relaxed">
                  Start recording with one click, or upload any audio file. Works with phone calls, 
                  Zoom recordings, or voice memos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">
                  AI Magic Happens
                </h3>
                <p className="text-slate-gray leading-relaxed">
                  Our AI extracts key points, action items, and decisions. 
                  Creates a structured, professional business report in seconds.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">
                  Perfect Report Delivered
                </h3>
                <p className="text-slate-gray leading-relaxed">
                  Get a professionally formatted .docx report sent to your email. 
                  Ready to share with clients or team members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Time Savings Section */}
      <div className="bg-gradient-to-br from-white via-sky-tint/30 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
              Stop Losing 3+ Hours Every Week
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-3xl mx-auto">
              The average professional spends 3.5 hours per week just on meeting documentation. 
              We give you that time back.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
            {/* Before/After Comparison */}
            <div className="space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  The Old Way (3.5 hours/week)
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Frantically scribbling notes during meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Spending hours typing up messy handwritten notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Formatting reports manually in Word</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Missing important details and action items</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  The RecapGo Way (5 minutes)
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Just hit record and focus on the conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>AI creates professional report in 60 seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Perfect formatting delivered to your inbox</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Never miss important details again</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="text-center">
              <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-12 border border-electric-blue/10 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
                  3.5
                </div>
                <p className="text-xl lg:text-2xl font-semibold text-deep-navy mb-2">
                  Hours Saved
                </p>
                <p className="text-lg text-slate-gray mb-8">
                  Every single week
                </p>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary">182</div>
                    <p className="text-sm text-slate-gray">Hours/Year</p>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary">€7,280</div>
                    <p className="text-sm text-slate-gray">Value/Year*</p>
                  </div>
                </div>
                
                <p className="text-xs text-slate-gray mt-4">
                  *Based on €40/hour professional rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Users Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
              Built for Busy Professionals
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-2xl mx-auto">
              Join thousands of professionals who've reclaimed their time
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-sky-tint/20 border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-deep-navy mb-2">Consultants</h3>
                <p className="text-sm text-slate-gray">Client meetings to billable reports</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-sky-tint/20 border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-deep-navy mb-2">Account Managers</h3>
                <p className="text-sm text-slate-gray">Track client calls & follow-ups</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-sky-tint/20 border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-deep-navy mb-2">Field Teams</h3>
                <p className="text-sm text-slate-gray">Site visits to service reports</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-sky-tint/20 border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-button">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-deep-navy mb-2">Project Managers</h3>
                <p className="text-sm text-slate-gray">Standup meetings to status updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-br from-sky-tint/30 via-white to-sky-tint/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray max-w-2xl mx-auto">
              No subscriptions, no surprises. Pay only for what you use.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white/90 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="mb-8">
                  <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                    €0.89
                  </div>
                  <p className="text-lg text-slate-gray">per hour of audio</p>
                  <p className="text-sm text-slate-gray mt-2">
                    Most meetings cost under €0.50
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-left">Pay-per-use - no monthly fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-left">Secure payment processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-left">Auto top-up available for teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-left">Start with €2.50 free credit</span>
                  </div>
                </div>
                
                <div className="bg-sky-tint/30 rounded-xl p-4 mb-8">
                  <p className="text-sm font-medium text-deep-navy">
                    💡 Most 30-minute meetings = €0.45
                  </p>
                </div>
                
                <Link to="/login">
                  <Button 
                    size="lg" 
                    className="w-full text-lg bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-button"
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-deep-navy mb-6">
              Ready to Reclaim 
              <span className="block text-transparent bg-clip-text bg-gradient-primary">
                3+ Hours Every Week?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop wasting time on manual note-taking. Join thousands of professionals 
              who've transformed their meeting workflow with RecapGo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-4 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-button group w-full sm:w-auto"
                >
                  Start Free - Get €2.50 Credit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-gray">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>3 minutes to first report</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-deep-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Logo size="small" />
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm opacity-75">© 2024 RecapGo. All rights reserved.</p>
              <p className="text-xs opacity-60 mt-1">Transform meetings into magic</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;