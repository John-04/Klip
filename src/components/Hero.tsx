import { Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C853]/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#00C853]" />
          <span className="text-sm font-medium text-white/90">Launching Soon</span>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="block text-white">The Future of</span>
            <span className="block bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent text-shadow">
              Saving Has Klipped In
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Join the waitlist for the world's most intuitive savings experience.
            Every spend, every Klip, every save.
          </p>
        </div>

        <div className="pt-8">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-3 bg-[#00C853] hover:bg-[#FF7A00] px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-500 transform hover:scale-105 glow-green hover:glow-orange"
          >
            Join the Waitlist
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="pt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass-dark rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#00C853] mb-2">10K+</div>
            <div className="text-sm text-white/60 font-light">Early Users</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#00C853] mb-2">$2M+</div>
            <div className="text-sm text-white/60 font-light">Saved Together</div>
          </div>
          <div className="glass-dark rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#00C853] mb-2">100%</div>
            <div className="text-sm text-white/60 font-light">Secure</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#00C853] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
