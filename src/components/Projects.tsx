import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Leaf, MessageCircle, Smartphone, Users, BarChart3, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, 
            {
              y: 100,
              opacity: 0,
              scale: 0.9
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: index * 0.3,
              ease: "power3.out",
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
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Green Puducherry",
      subtitle: "Environmental Tracking App",
      description: "A comprehensive plant monitoring application designed to track and monitor the growth of planted trees, supporting environmental sustainability efforts in Puducherry.",
      longDescription: "Built with Flutter using Clean Architecture principles, this app helps environmental organizations and individuals track tree planting initiatives, monitor growth progress, and contribute to reforestation efforts.",
      technologies: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "Google Maps", "Camera API"],
      features: [
        "Real-time plant growth tracking",
        "GPS-based location mapping",
        "Photo documentation system",
        "Progress analytics dashboard",
        "Environmental impact metrics",
        "Community engagement features"
      ],
      icon: Leaf,
      gradient: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      accentColor: "text-green-600"
    },
    {
      id: 2,
      title: "JobSeeker Chat App",
      subtitle: "Professional Networking Platform",
      description: "A real-time communication platform connecting job seekers with recruiters and professionals, facilitating meaningful career conversations and opportunities.",
      longDescription: "Developed using Flutter with Provider state management and Clean Architecture, this app provides secure, real-time messaging capabilities for professional networking in the job market.",
      technologies: ["Flutter", "Provider", "Clean Architecture", "Socket.io", "REST API", "Push Notifications"],
      features: [
        "Real-time messaging system",
        "Professional profile management",
        "Job opportunity sharing",
        "Secure authentication",
        "File sharing capabilities",
        "Push notification system"
      ],
      icon: MessageCircle,
      gradient: "from-blue-400 to-purple-600",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed px-4">
            Showcasing purpose-driven mobile applications built with Flutter, Clean Architecture, and modern state management patterns.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image/Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className={`${project.bgColor} rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-3">
                        <Smartphone className={`w-4 h-4 sm:w-5 sm:h-5 ${project.accentColor}`} />
                        <span className="text-xs sm:text-sm font-medium text-neutral/60">Mobile Application</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className={`w-4 h-4 sm:w-5 sm:h-5 ${project.accentColor}`} />
                        <span className="text-xs sm:text-sm font-medium text-neutral/60">Performance Optimized</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${project.accentColor}`} />
                        <span className="text-xs sm:text-sm font-medium text-neutral/60">Secure Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6 sm:space-y-8`}>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral mb-2">{project.title}</h3>
                    <p className={`text-base sm:text-lg ${project.accentColor} font-medium mb-3 sm:mb-4`}>{project.subtitle}</p>
                    <p className="text-neutral/70 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{project.description}</p>
                    <p className="text-neutral/60 text-sm sm:text-base leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-neutral mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-base-200 text-neutral/70 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-neutral mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full flex-shrink-0`}></div>
                          <span className="text-neutral/70 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <motion.button
                      className={`btn btn-outline ${project.accentColor} hover:bg-gradient-to-r ${project.gradient} hover:text-white hover:border-transparent w-full sm:w-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      View Code
                    </motion.button>
                    <motion.button
                      className={`btn ${project.accentColor} bg-gradient-to-r ${project.gradient} text-white border-transparent hover:scale-105 w-full sm:w-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;