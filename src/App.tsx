import { ParticleField } from './components/ParticleField';
import { Hero } from './components/Hero';
import { ProductTeaser } from './components/ProductTeaser';
import { ValueProposition } from './components/ValueProposition';
import { WaitlistSignup } from './components/WaitlistSignup';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <ParticleField />

      <main className="relative z-10">
        <Hero />
        <ProductTeaser />
        <ValueProposition />
        <WaitlistSignup />
      </main>

      <Footer />
    </div>
  );
}

export default App;
