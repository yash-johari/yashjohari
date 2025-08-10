import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import eyeCarePlus from '../assets/images/eye-care-plus.png';
import worldCapitalQuiz from '../assets/images/world-capital-quiz.png';
import toDoList from '../assets/images/to-do-list.png';
import oldPortfolio from "../assets/images/old-portfolio.png";
import blogHub from '../assets/images/blog-web-app.png';
import drumKit from '../assets/images/drum-kit.png';
import diceGame from '../assets/images/dice-game.png';
import simonGame from '../assets/images/simon-game.png';
import tinDog from '../assets/images/tindog.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'EyeCare Plus',
      description: 'An app that suggests suitable eye drops based on user symptoms and provides detailed eye care tips and a city-wise doctor directory.',
      image: eyeCarePlus,
      tech: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'API', 'Material UI'],
      githubUrl: 'https://github.com/yash-johari/eye-care-web-app', 
      liveUrl: 'https://eye-care-medical-app.netlify.app/',
      category: 'Full Stack with Database',
      date: '2025',
    },
    {
      id: 2,
      title: 'World Capital Quiz',
      description: 'A quiz game that displays random countries and prompts users to enter their capitals, with scoring and game-over functionality upon a wrong answer.',
      image: worldCapitalQuiz,
      tech: ['EJS', 'Node.js', 'Express', 'Axios','CSS3'],
      githubUrl: 'https://github.com/yash-johari/world-capital-quiz',
      liveUrl: '#',
      category: 'Full Stack with Database',
      date: '2024',
    },
    {
      id: 3,
      title: 'To-Do List',
      description: 'A task management app allowing users to add, update, and delete tasks, with full data persistence even after refreshing or restarting.',
      image: toDoList,
      tech: ['EJS', 'Node.js', 'Express', 'Axios', 'PostgreSQL','CSS3'],
      githubUrl: 'https://github.com/yash-johari/to-do-list-with-postgres',
      liveUrl: '#',
      category: 'Full Stack with Database',
      date: '2024',
    },
    {
      id: 4,
      title: 'Old Portfolio',
      description: 'A personal portfolio showcasing projects, skills, and contact details through a clean, static layout suitable for basic professional presentation.',
      image: oldPortfolio,
      tech: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
      githubUrl: 'https://github.com/yash-johari/portfolio-yash-johari',
      liveUrl: 'https://yash-johari.github.io/portfolio-yash-johari/',
      category: 'Frontend',
      date: '2024',
    },
    {
      id: 5,
      title: 'Blog Hub',
      description: 'A blogging platform where users can compose, view, and manage blog posts, offering a simple and interactive content-sharing experience.',
      image: blogHub,
      tech: ['EJS', 'Node.js', 'CSS3', 'Express','JavaScript'],
      githubUrl: 'https://github.com/yash-johari/blog-web-application', 
      liveUrl: '#',
      category: 'Full Stack',
      date: '2024',
    },
    {
      id: 6,
      title: 'Drum Kit',
      description: 'An interactive virtual drum kit that plays different drum sounds on button click or keypress, mimicking a real drumming experience.',
      image: drumKit,
      tech: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
      githubUrl: 'https://github.com/yash-johari/Drum-Kit', 
      liveUrl: 'https://yash-johari.github.io/Drum-Kit/', 
      category: 'Full Stack',
      date: '2023',
    },
    {
      id: 7,
      title: 'Dice Game',
      description: 'A two-player dice rolling game that displays random outcomes and declares a winner based on the higher roll after each round.',
      image: diceGame,
      tech: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
      githubUrl: 'https://github.com/yash-johari/Dice-Game', 
      liveUrl: 'https://yash-johari.github.io/Dice-Game/', 
      category: 'Full Stack',
      date: '2023',
    },
    {
      id: 8,
      title: 'Simon Game',
      description: 'A memory game that challenges users to follow increasingly complex color patterns, improving focus and short-term memory through repetition.',
      image: simonGame,
      tech: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
      githubUrl: 'https://github.com/yash-johari/Simon-Game', 
      liveUrl: 'https://yash-johari.github.io/Simon-Game/', 
      category: 'Full Stack',
      date: '2023',
    },
    {
      id: 9,
      title: 'Tindog',
      description: 'A dog-themed dating website concept designed for pet lovers to explore dog profiles and find perfect playdate matches.',
      image: tinDog,
      tech: ['HTML5', 'CSS3', 'Bootstrap'],
      githubUrl: 'https://github.com/yash-johari/TinDog', 
      liveUrl: 'https://yash-johari.github.io/TinDog/', 
      category: 'Frontend',
      date: '2023',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and development projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" target='_blank'
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" target='_blank'
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href='/contact'
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Projects;