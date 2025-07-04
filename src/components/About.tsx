import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layers, Zap, Target, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, 
            {
              y: 100,
              opacity: 0,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Building maintainable, scalable apps with proper separation of concerns and testable code structures."
    },
    {
      icon: Layers,
      title: "State Management",
      description: "Expert in BLoC and Provider patterns for predictable state management in complex applications."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing Flutter apps for smooth 60fps performance and efficient resource utilization."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Creating applications that solve real-world problems and make a positive impact on society."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Passionate about environmental technology and building green solutions for a better future."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Focusing on intuitive UX/UI design that prioritizes user needs and accessibility."
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-16 sm:py-20 lg:py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed px-4">
            I'm a Flutter developer with a strong foundation in Clean Architecture and modern state management. 
            My passion lies in creating beautiful, scalable mobile applications that make a meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="card-body p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral">My Development Philosophy</h3>
              <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">
                I believe in writing code that not only works but tells a story. Every line should have a purpose, 
                every architecture decision should be justified, and every user interaction should feel natural and intuitive.
              </p>
              <p className="text-sm sm:text-base text-neutral/70 leading-relaxed">
                My experience spans from environmental tracking applications to professional networking platforms, 
                always maintaining a focus on clean, maintainable code that scales with business needs.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-neutral/70">1+ years of Flutter development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-neutral/70">Clean Architecture advocate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-neutral/70">BLoC & Provider expert</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-neutral/70">Sustainability-focused projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;