import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Code, Database, GitBranch, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillCardsRef.current.forEach((card, index) => {
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
              delay: index * 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      gradient: "from-blue-400 to-blue-600",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Dart", level: 90 },
        { name: "Android Development", level: 80 }
      ]
    },
    {
      category: "State Management",
      icon: Layers,
      gradient: "from-purple-400 to-purple-600",
      skills: [
        { name: "BLoC Pattern", level: 85 },
        { name: "Provider", level: 80 }
      ]
    },
    {
      category: "Architecture",
      icon: Code,
      gradient: "from-green-400 to-green-600",
      skills: [
        { name: "Clean Architecture", level: 85 },
        { name: "MVVM", level: 80 },
        { name: "Repository Pattern", level: 80 },
        { name: "Dependency Injection", level: 75 }
      ]
    },
    {
      category: "Backend & Database",
      icon: Database,
      gradient: "from-red-400 to-red-600",
      skills: [
        { name: "Firebase", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      category: "Development Tools",
      icon: GitBranch,
      gradient: "from-yellow-400 to-yellow-600",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Android Studio", level: 80 },
        { name: "Postman", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral mb-6">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
            Expertise in modern Flutter development with a focus on clean architecture, 
            state management, and best practices for scalable mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              ref={(el) => (skillCardsRef.current[index] = el)}
              className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="card-body p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral/70 font-medium">{skill.name}</span>
                        <span className="text-sm text-neutral/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (index * 0.15) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-neutral/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-neutral/70">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-neutral/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-neutral/70">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;