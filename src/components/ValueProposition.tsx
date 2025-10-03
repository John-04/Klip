import { Zap, Lock, Globe } from 'lucide-react';

export const ValueProposition = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00C853]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">The Power of </span>
            <span className="bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent">
              Automatic Savings
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Built on cutting-edge technology to give you the financial freedom you deserve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00C853]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass-dark rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-[#00C853]/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Auto-Save Every Transaction
              </h3>

              <p className="text-white/60 leading-relaxed font-light">
                Connect your accounts and let Klip automatically save a percentage
                of every purchase. No thinking required, just seamless savings growth.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#00C853] font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00C853]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass-dark rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-[#00C853]/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Your Personal Vault on Solana
              </h3>

              <p className="text-white/60 leading-relaxed font-light">
                Built on Solana blockchain for maximum security and speed. Your savings
                are protected by military-grade encryption and decentralized infrastructure.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#00C853] font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00C853]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative glass-dark rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-500 border border-transparent hover:border-[#00C853]/30">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Simple, Transparent, Decentralized
              </h3>

              <p className="text-white/60 leading-relaxed font-light">
                No hidden fees, no complicated terms. Just straightforward automatic
                savings powered by Web3 technology. You own your data, always.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#00C853] font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
