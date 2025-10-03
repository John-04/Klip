import { Twitter, MessageCircle, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-white text-xl font-bold">Klip</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-[#00C853]/20 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-white/60 group-hover:text-[#00C853] transition-colors" />
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-[#00C853]/20 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-[#00C853] transition-colors" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-dark rounded-full flex items-center justify-center hover:bg-[#00C853]/20 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-white/60 group-hover:text-[#00C853] transition-colors" />
            </a>
          </div>

          <div className="text-white/40 text-sm font-light">
            <span className="hidden md:inline">© 2025 Klip. </span>
            <span>All rights reserved.</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/40 text-sm font-light">
            <a href="#" className="hover:text-[#00C853] transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-[#00C853] transition-colors">Terms of Service</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-[#00C853] transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />
    </footer>
  );
};
