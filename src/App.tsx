/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Zap, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const LOGOS = [
  "https://www.moncallcenter.ma/images/300/ca-7hfvsi3yaw7jdqdwnl33yxtb785tqq02122024034615.jpg",
  "https://www.moncallcenter.ma/images/300/ca-gww9hqb0l98yscyw59yshkq27ehv7y04072023104025.jpg",
  "https://www.moncallcenter.ma/images/300/ca-qw518dc0nkc4t73xdcldg2w5vai38031082022110725.jpg",
  "https://www.moncallcenter.ma/images/300/ca-v97xn3cnp7egl3ngwj6d49awelw7re12082019115803.jpg",
  "https://www.moncallcenter.ma/images/300/ca-yqic8h4qucy7mu156l9sx7xi4ra0yl18032015122518.jpg",
  "https://www.moncallcenter.ma/images/300/ca-2pywuw3wvvjsgy0lsypy7eq5yg082j25042025032000.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5sD8XN-hEm21JvI-2CycQNaWw0Zs6TtlZQ&s"
];

const TESTIMONIALS = [
  {
    name: "Sara M.",
    role: "RRH",
    text: "Gain de temps incroyable !",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Karim T.",
    role: "Directeur",
    text: "Matching IA parfait.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Ahmed R.",
    role: "Manager",
    text: "Service très réactif.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Yasmine B.",
    role: "Team Leader",
    text: "Interface efficace.",
    image: "https://images.pexels.com/photos/7644890/pexels-photo-7644890.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* 1. Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png" 
              alt="CoinCarrière" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex space-x-8 font-medium transition-colors ${
            isScrolled ? 'text-deep-blue' : 'text-white'
          }`}>
            <a href="#process" className="hover:text-lime-green transition-colors">Processus</a>
            <a href="#benefits" className="hover:text-lime-green transition-colors">Avantages</a>
            <a href="#testimonials" className="hover:text-lime-green transition-colors">Avis</a>
            <a href="#transformation" className="hover:text-lime-green transition-colors">L'Expérience</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="https://coincarriere.com/register?type=company"
              className="bg-lime-green hover:bg-lime-hover text-deep-blue font-bold px-6 py-2.5 rounded-full transition-all flex items-center gap-2 group"
            >
              Recruter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-deep-blue' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-deep-blue' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 md:hidden flex flex-col space-y-6"
          >
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold">Processus</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold">Avantages</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold">Avis</a>
            <a href="#transformation" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold">L'Expérience</a>
            <a 
              href="https://coincarriere.com/register?type=company"
              className="bg-lime-green text-deep-blue font-bold py-4 rounded-xl text-center flex items-center justify-center gap-2"
            >
              Démarrer gratuitement
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-deep-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.maroccallcenter.com/wp-content/uploads/2019/05/back-office.jpg" 
            className="w-full h-full object-cover opacity-30" 
            alt="Back Office"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/60 via-deep-blue/80 to-deep-blue"></div>
        </div>

        <div className="container relative z-10 px-6 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-lime-green/20 text-lime-green text-sm font-bold tracking-wider mb-6 border border-lime-green/30 backdrop-blur-sm">
              LA SOLUTION N°1 AU MAROC
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-white">
              Recrutez vos agents <br /> 
              <span className="text-gradient-hero italic">sans effort</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Recrutement massif et qualifié dédié exclusivement aux centres d'appels. 
              Gérez tout votre process sur une seule plateforme.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://coincarriere.com/register?type=company" 
                className="w-full sm:w-auto bg-lime-green hover:bg-lime-hover text-deep-blue font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(160,196,2,0.4)] inline-flex items-center justify-center gap-3"
              >
                Démarrer gratuitement
                <Zap className="w-5 h-5 fill-current" />
              </a>
              <a 
                href="#process" 
                className="w-full sm:w-auto px-8 py-5 text-white font-semibold hover:bg-white/5 rounded-full transition-colors inline-block border border-white/20 backdrop-blur-sm"
              >
                Comment ça marche ?
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements for visual depth */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 3. Logos Marquee Section */}
      <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
          <p className="text-gray-500 font-medium text-lg">
            Plus de <span className="text-deep-blue font-bold">+447 entreprises</span> nous font confiance
          </p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex space-x-12 whitespace-nowrap py-4"
            animate={{ x: [0, -1920] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo} 
                className="h-12 md:h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                alt="Client Logo" 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section id="process" className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-deep-blue text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Notre Processus en <span className="text-lime-green">4 étapes</span>
            </h2>
            <div className="w-24 h-2 bg-lime-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Analyse', text: 'Identification précise du profil idéal et des compétences requises.', icon: Target },
              { id: '02', title: 'Matching IA', text: 'Filtrage intelligent de milliers de CV grâce à nos algorithmes.', icon: Zap },
              { id: '03', title: 'Validation', text: 'Évaluation rigoureuse des soft-skills et du niveau de langue.', icon: ShieldCheck },
              { id: '04', title: 'Placement', text: 'Short-list finale prête à l\'emploi livrée en un temps record.', icon: CheckCircle }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-off-white border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-lime-green text-3xl font-black">{step.id}</div>
                  <step.icon className="w-8 h-8 text-gray-300 group-hover:text-lime-green transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-blue">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section id="benefits" className="py-24 bg-off-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-lime-green/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-deep-blue/5 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase text-deep-blue">
            Résultats concrets pour votre Centre
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                  <Users className="text-lime-green w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-deep-blue">Sourcing Massif Qualifié</h3>
                  <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-lime-green pl-6 mb-2">
                    "Générez un flux constant de candidats prêts à intégrer vos sessions de formation."
                  </p>
                  <p className="text-gray-400">Plus de 50,000 candidats inscrits sur notre base de données spécialisée.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                  <Clock className="text-lime-green w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-deep-blue">Vitesse d'Exécution</h3>
                  <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-lime-green pl-6 mb-2">
                    "Réduisez votre Time-to-Hire de 60% grâce à nos outils d'automatisation."
                  </p>
                  <p className="text-gray-400">Passez de l'offre au recrutement en moins de 48 heures pour les profils standards.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=compress&cs=tinysrgb&w=800"
                  alt="Boardroom"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-deep-blue p-8 rounded-3xl text-white shadow-xl transform -rotate-3 border border-white/10 hidden sm:block">
                <div className="text-4xl font-black text-lime-green mb-1">98%</div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-60">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase text-deep-blue">Ils ont transformé leur recrutement</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos partenaires qui recrutent au quotidien avec nos solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-off-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative group"
              >
                <div className="flex text-lime-green mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-lime-green rounded-full p-1 border-2 border-white">
                      <CheckCircle className="w-2.5 h-2.5 text-deep-blue" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue">{t.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Video Section (Transformation) */}
      <section id="transformation" className="py-24 bg-off-white px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-deep-blue uppercase tracking-tighter">
              Ne laissez plus le recrutement vous épuiser
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez comment <strong className="text-lime-green">CoinCarrière</strong> révolutionne le sourcing en vidéo. ✨
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12 relative group">
            {/* Artistic frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-lime-green to-deep-blue rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(22,39,95,0.3)] border-8 border-white aspect-video bg-black/10">
              <iframe 
                className="w-full h-full"
                src="https://drive.google.com/file/d/1R1sajReXglQDHGDxTy8OVpvWNgCvvdQQ/preview" 
                allow="autoplay" 
                allowFullScreen
                title="CoinCarrière Demo"
              ></iframe>
            </div>
            
            <div className="text-center">
              <p className="font-bold text-lime-green uppercase text-sm tracking-[0.2em] mt-10 italic flex items-center justify-center gap-3">
                <span className="w-12 h-px bg-lime-green"></span>
                L'effet CoinCarrière en action
                <span className="w-12 h-px bg-lime-green"></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Stats Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            { value: '+457', label: 'Partenaires' },
            { value: '4943+', label: 'Offres' },
            { value: '100%', label: 'Gratuit' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl md:text-7xl font-black mb-3 text-deep-blue tracking-tighter">{stat.value}</div>
              <p className="font-bold uppercase text-gray-400 text-sm tracking-[0.3em] pl-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. CTA Section */}
      <section id="contact" className="py-32 text-center relative overflow-hidden bg-deep-blue">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-lime-green rounded-full blur-[160px]"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-400 rounded-full blur-[160px]"></div>
        </div>

        <div className="relative z-10 px-6 container mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-10 text-white leading-tight">
              Transformez votre plateau <br /> 
              <span className="text-lime-green underline decoration-lime-green/30 underline-offset-8">dès aujourd'hui.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://coincarriere.com/register?type=company" 
                className="w-full sm:w-auto bg-lime-green hover:bg-lime-hover text-deep-blue font-black py-7 px-16 rounded-full text-2xl transition-all shadow-2xl transform hover:scale-110 active:scale-95 inline-flex items-center gap-4 group"
              >
                Lancer mon recrutement
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <p className="text-white/40 mt-10 font-medium uppercase tracking-[0.2em] text-sm italic">
              Sans engagement • 100% Digital • Leader au Maroc
            </p>
          </motion.div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <img 
              src="https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png" 
              alt="CoinCarrière" 
              className="h-10 md:h-12 w-auto mb-10"
            />
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="#process" className="hover:text-deep-blue transition-colors">Processus</a>
              <a href="#benefits" className="hover:text-deep-blue transition-colors">Avantages</a>
              <a href="#testimonials" className="hover:text-deep-blue transition-colors">Avis Clients</a>
              <a href="#transformation" className="hover:text-deep-blue transition-colors">L'effet CoinCarrière</a>
              <a href="#" className="hover:text-deep-blue transition-colors">Contact</a>
            </div>

            <div className="w-full h-px bg-gray-100 mb-10"></div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-gray-400 text-sm italic">
              <p>© 2026 CoinCarrière. Tous droits réservés.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-lime-green">Confidentialité</a>
                <a href="#" className="hover:text-lime-green">Mentions Légales</a>
              </div>
              <p>Leader du recrutement Call Center au Maroc.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
