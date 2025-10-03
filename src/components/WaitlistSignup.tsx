import { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage("Welcome to the future! Check your email for updates.");
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="waitlist" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C853]/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
          <div className="w-2 h-2 bg-[#00C853] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/90">Limited Spots Available</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Join </span>
          <span className="bg-gradient-to-r from-[#00C853] to-[#00E676] bg-clip-text text-transparent">
            10,000+ Early Savers
          </span>
        </h2>

        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-light">
          Be among the first to experience the future of automatic savings.
          Get exclusive early access and founding member benefits.
        </p>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C853] to-[#00E676] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative flex items-center glass-dark rounded-2xl p-2 border border-white/10 focus-within:border-[#00C853]/50 transition-colors">
                <Mail className="w-5 h-5 text-white/40 ml-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-white placeholder:text-white/40 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#00C853] hover:bg-[#FF7A00] px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 glow-green hover:glow-orange"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 glass-dark rounded-xl p-4 border border-[#00C853]/30">
                <CheckCircle2 className="w-5 h-5 text-[#00C853] flex-shrink-0" />
                <p className="text-[#00C853] text-sm font-medium">{message}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 glass-dark rounded-xl p-4 border border-[#FF7A00]/30">
                <AlertCircle className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <p className="text-[#FF7A00] text-sm font-medium">{message}</p>
              </div>
            )}
          </form>

          <p className="text-white/40 text-sm mt-6 font-light">
            No spam. Just your early access link when we launch.
          </p>
        </div>
      </div>
    </section>
  );
};
