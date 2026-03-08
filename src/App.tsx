/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Brain, 
  Activity, 
  HandMetal, 
  MessageCircle, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Baby,
  Smile,
  Home,
  Puzzle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

interface Professional {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'psicologia',
    title: 'Psicología',
    description: 'Acompañamiento emocional y desarrollo de habilidades socioemocionales en niños y adolescentes, trabajando junto a la familia para favorecer el bienestar integral.',
    icon: <Heart className="w-8 h-8" />,
    color: 'bg-crear-peach',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    description: 'Intervención terapéutica orientada a favorecer la autonomía en las actividades de la vida diaria, el juego y el desarrollo de habilidades funcionales.',
    icon: <HandMetal className="w-8 h-8" />,
    color: 'bg-crear-blue',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'psicomotricidad',
    title: 'Psicomotricidad',
    description: 'Trabajo terapéutico que integra cuerpo, movimiento y emociones, promoviendo el desarrollo psicomotor y la expresión corporal.',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-crear-mint',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'psicopedagogia',
    title: 'Psicopedagogía',
    description: 'Evaluación y acompañamiento en procesos de aprendizaje, fortaleciendo estrategias cognitivas y habilidades escolares.',
    icon: <Brain className="w-8 h-8" />,
    color: 'bg-crear-accent/20',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fonoaudiologia',
    title: 'Fonoaudiología',
    description: 'Abordaje terapéutico de la comunicación, el lenguaje y la deglución.',
    icon: <MessageCircle className="w-8 h-8" />,
    color: 'bg-crear-lavender',
    image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800'
  }
];

const WORK_AREAS = [
  { title: 'Desarrollo Emocional', icon: <Heart className="text-crear-coral" /> },
  { title: 'Habilidades Sociales', icon: <Users className="text-crear-secondary" /> },
  { title: 'Autonomía en la Vida Diaria', icon: <Home className="text-crear-primary" /> },
  { title: 'Juego Terapéutico', icon: <Puzzle className="text-crear-accent" /> },
  { title: 'Desarrollo Cognitivo', icon: <Brain className="text-crear-purple" /> },
  { title: 'Acompañamiento Familiar', icon: <Smile className="text-crear-accent" /> },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1491308056676-205bb7ae9d73?auto=format&fit=crop&q=80&w=800',
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // URL del logo (Asegúrate de subir tu archivo como 'logo.png' a la carpeta raíz)
  const LOGO_URL = "/logo.png"; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-crear' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="CREAr Logo" 
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-bold text-crear-text tracking-tight leading-none">CREAr</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-crear-text/60 font-medium">Espacio Terapéutico</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-crear-text hover:text-crear-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/543884087775" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-6 text-sm">
            Solicitar Turno
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-crear-text" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-crear-text"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/543884087775" className="btn-primary justify-center">
              Solicitar Turno
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-crear-bg">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-crear-primary/5 rounded-l-[100px] -z-10" />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-crear-peach rounded-full blur-3xl -z-10 opacity-30" 
      />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-crear-primary/10 text-crear-primary rounded-full text-sm font-semibold mb-6">
            <Baby className="w-4 h-4" />
            <span>Espacio Terapéutico Interdisciplinario</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-crear-text leading-tight mb-6">
            CREAr <br />
            <span className="text-crear-primary">Acompañamos procesos</span>
          </h1>
          <p className="text-xl text-crear-text/80 mb-10 max-w-lg leading-relaxed">
            "Acompañamos procesos y potenciamos capacidades." Un lugar donde la familia y la terapia se unen para el desarrollo integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/543884087775" className="btn-primary">
              Solicitar turno
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="https://wa.me/543884087775" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80&w=1000" 
              alt="Terapia infantil cálida" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-crear-accent rounded-full -z-10 blur-2xl opacity-30" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-crear-secondary rounded-full -z-10 blur-xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre-crear" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src={GALLERY_IMAGES[0]} alt="Espacio 1" className="rounded-2xl shadow-md h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
              <img src={GALLERY_IMAGES[1]} alt="Espacio 2" className="rounded-2xl shadow-md h-64 w-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl font-display font-bold mb-6">Bienvenidos a nuestro espacio</h2>
            <div className="w-20 h-1.5 bg-crear-primary rounded-full mb-8" />
            <p className="text-lg text-crear-text/80 mb-6 leading-relaxed">
              Somos un equipo interdisciplinario unido por la misma vocación de servicio y por los valores de un emprendimiento familiar fundado por cuatro hermanas.
            </p>
            <p className="text-lg text-crear-text/80 mb-6 leading-relaxed">
              Entendemos que cada proceso es único y que, para potenciar capacidades, no solo se necesita conocimiento profesional, sino también empatía, acompañamiento y trabajo en equipo.
            </p>
            <div className="bg-crear-mint p-6 rounded-2xl border-l-4 border-crear-primary italic text-crear-text/90">
              "En CREAR somos más que profesionales; somos una comunidad terapéutica dedicada a cuidar el bienestar de cada niño, adolescente y su familia."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-crear-blue/30">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-crear-text/60 max-w-2xl mx-auto">
          Ofrecemos un abordaje integral a través de diversas disciplinas para acompañar el desarrollo de cada niño y adolescente.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-crear-text`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-crear-text/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WorkAreas = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Qué Trabajamos</h2>
          <p className="text-crear-text/60">Enfocamos nuestra labor en los pilares fundamentales del desarrollo.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {WORK_AREAS.map((area, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-crear-mint/20 border border-crear-mint/50"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                {area.icon}
              </div>
              <span className="font-medium text-sm">{area.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-crear-peach/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2">Nuestro Espacio</h2>
            <p className="text-crear-text/60">Un ambiente cálido y preparado para el juego y el aprendizaje.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2">
            <img src={GALLERY_IMAGES[0]} alt="Galería 1" className="w-full h-full object-cover rounded-3xl shadow-md" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-2">
            <img src={GALLERY_IMAGES[1]} alt="Galería 2" className="w-full h-64 object-cover rounded-3xl shadow-md" referrerPolicy="no-referrer" />
          </div>
          <div>
            <img src={GALLERY_IMAGES[2]} alt="Galería 3" className="w-full h-64 object-cover rounded-3xl shadow-md" referrerPolicy="no-referrer" />
          </div>
          <div>
            <img src={GALLERY_IMAGES[3]} alt="Galería 4" className="w-full h-64 object-cover rounded-3xl shadow-md" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold mb-6">Nuestra Ubicación</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-crear-blue rounded-xl flex items-center justify-center text-crear-secondary shrink-0">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold text-lg">Dirección</h4>
                <p className="text-crear-text/70">Gral. Lavalle 312, San Salvador de Jujuy, Jujuy, Argentina.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-crear-mint rounded-xl flex items-center justify-center text-crear-primary shrink-0">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold text-lg">Teléfono / WhatsApp</h4>
                <p className="text-crear-text/70">3884087775</p>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/8Av5HwogEw52W8Yc7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
        
        <div className="h-[400px] rounded-3xl overflow-hidden shadow-lg border-4 border-crear-blue/20">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.141528656149!2d-65.3056447!3d-24.1843103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f4795777777%3A0x7777777777777777!2sGral.%20Lavalle%20312%2C%20Y4600%20San%20Salvador%20de%20Jujuy%2C%20Jujuy!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const LOGO_URL = "/logo.png";

  return (
    <footer id="contacto" className="bg-crear-text text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={LOGO_URL} 
              alt="CREAr Logo" 
              className="h-16 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight">CREAr</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50">Espacio Terapéutico</span>
            </div>
          </div>
          <p className="text-white/60 max-w-sm mb-8">
            Espacio Terapéutico Interdisciplinario dedicado a acompañar procesos y potenciar capacidades en niños, adolescentes y sus familias.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/espacioterapeutico_crearjujuy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-crear-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:espaciocrear4@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-crear-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/543884087775" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-crear-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#inicio" className="hover:text-crear-primary transition-colors">Inicio</a></li>
            <li><a href="#sobre-crear" className="hover:text-crear-primary transition-colors">Sobre Nosotros</a></li>
            <li><a href="#servicios" className="hover:text-crear-primary transition-colors">Servicios</a></li>
            <li><a href="#galeria" className="hover:text-crear-primary transition-colors">Galería</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contacto</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-crear-primary" />
              <span>Gral. Lavalle 312, Jujuy</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-crear-primary" />
              <span>3884087775</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-crear-primary" />
              <span>espaciocrear4@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} CREAr – Espacio Terapéutico Interdisciplinario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WorkAreas />
      <Gallery />
      <Location />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/543884087775" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
