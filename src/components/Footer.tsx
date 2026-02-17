import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-foreground py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-display font-bold mb-2">Lumina Cirque</h2>
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Lumina Cirque Productions.<br />All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-6 h-6" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-6 h-6" /></a>
        </div>
        
        <div className="flex flex-col gap-2 text-center md:text-right text-sm text-primary-foreground/70">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Press Kit</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
