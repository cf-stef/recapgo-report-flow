import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo size="small" variant="light" />
            <p className="text-white/70 mt-4 max-w-md">
              Transform your meetings into actionable insights with AI-powered summaries and smart collaboration tools.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/blog" className="block text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/dashboard" className="block text-white/70 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
          
          {/* Blog CTA */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">
              Get the latest insights on meeting productivity and AI collaboration.
            </p>
            <Link to="/blog">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy w-full">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Our Blog
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 sm:mb-0">
              © 2024 RecapGo. All rights reserved. Transform meetings into magic.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}