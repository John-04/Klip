import { Wallet, TrendingUp, Shield } from 'lucide-react';

export const ProductTeaser = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C853]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="glass rounded-2xl px-5 py-2 text-sm text-[#00C853] font-medium border border-[#00C853]/30">
                Experience the Future
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Save Without</span>
              <br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent">
                Thinking About It
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed font-light">
              Klip seamlessly integrates with your spending habits, automatically
              saving a portion of every transaction. Watch your savings grow while
              you live your life.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group">
                <div className="glass-dark rounded-xl p-3 group-hover:bg-[#00C853]/20 transition-colors duration-300">
                  <Wallet className="w-6 h-6 text-[#00C853]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Spend Smart</h3>
                  <p className="text-white/60 text-sm font-light">
                    Every transaction triggers intelligent savings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="glass-dark rounded-xl p-3 group-hover:bg-[#00C853]/20 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-[#00C853]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Save Instantly</h3>
                  <p className="text-white/60 text-sm font-light">
                    Real-time deposits into your secure vault
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="glass-dark rounded-xl p-3 group-hover:bg-[#00C853]/20 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-[#00C853]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Earn Rewards</h3>
                  <p className="text-white/60 text-sm font-light">
                    Get rewarded for your saving consistency
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C853]/20 to-[#FF7A00]/20 blur-3xl" />

            <div className="relative glass-dark rounded-3xl p-8 transform hover:scale-105 transition-transform duration-700 animate-float">
              <div className="aspect-[9/16] bg-gradient-to-b from-black via-[#00C853]/10 to-black rounded-2xl border border-[#00C853]/30 overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E676] flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50">Total Saved</div>
                        <div className="text-white font-bold">$12,847.92</div>
                      </div>
                    </div>
                    <div className="text-[#00C853] text-sm font-medium">+24%</div>
                  </div>

                  <div className="glass rounded-2xl p-4 space-y-3">
                    <div className="text-xs text-white/50 uppercase tracking-wide">Recent Saves</div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-sm text-white/70">Coffee Shop</span>
                        <span className="text-sm text-[#00C853] font-medium">+$0.45</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-white/10">
                        <span className="text-sm text-white/70">Grocery Store</span>
                        <span className="text-sm text-[#00C853] font-medium">+$8.20</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-sm text-white/70">Gas Station</span>
                        <span className="text-sm text-[#00C853] font-medium">+$4.15</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-white">147</div>
                      <div className="text-xs text-white/50">Days Active</div>
                    </div>
                    <div className="glass rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-white">892</div>
                      <div className="text-xs text-white/50">Total Klips</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 animate-float-delayed">
                <div className="text-xs text-white/50 mb-1">Next Save</div>
                <div className="text-white font-bold">$2.35</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
