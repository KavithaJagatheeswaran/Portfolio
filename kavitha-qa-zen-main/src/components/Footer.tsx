import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kavitha J. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Ensuring Quality Through Automation
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/kavitha-jagatheeswaran-084017120"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:jagathekavitha@gmail.com"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href="tel:+919962079095"
          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          aria-label="Phone"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
