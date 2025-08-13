import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, Code, Briefcase, GraduationCap, User } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';
import yashJohariImage from "../assets/images/yashjohari.jpg";

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between py-20"
          >
            {/* Left Content */}
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Yash Johari
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
              >
                Passionate about crafting exceptional web experiences with React.js, Node.js, 
                and modern technologies. Currently working as a developer intern while freelancing 
                and building innovative solutions.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button 
                onClick={() => window.open('https://drive.google.com/file/d/1v07M__hEa1PbhhnHMHeMf4XAvm_BdQjC/view?usp=drive_link', '_blank')}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200">
                  {/* Replace with actual resume PDF */}
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </button>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div variants={itemVariants} className="lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full p-8">
                  {/* Replace this placeholder with a professional developer headshot */}
                  <img
                    src={yashJohariImage}
                    alt="Yash Johari - Full Stack Developer"
                    className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full mx-auto shadow-2xl"
                  />
                  {/* Add a professional developer headshot here - should show a friendly, professional person in business casual attire */}
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Currently Available For - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mb-20"
          >
            <div className="max-w-4xl mx-auto p-8 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Currently Available For
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm text-center">Freelance Projects</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm text-center">Full-time Opportunities</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mb-2"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm text-center">Consulting Work</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mb-2"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm text-center">Collaboration</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <User className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
                About Me
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                I'm Yash Johari, a passionate Full Stack Web Developer with a strong foundation in modern 
                web technologies. Having completed my BCA, I'm currently working as a developer intern at 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cyberpassion Technologies Pvt Ltd</span>, 
                where I contribute to innovative web solutions. Beyond my internship, I actively freelance 
                in website development, helping businesses bring their digital visions to life with React.js, 
                Node.js, Express, PostgreSQL, and modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
                Core Skills
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
                { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-500' },
                { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-orange-500' },
                { name: 'PostgreSQL', level: 80, color: 'from-indigo-500 to-purple-500' },
                { name: 'Express.js', level: 82, color: 'from-gray-500 to-gray-500' },
                { name: 'HTML/CSS', level: 95, color: 'from-pink-500 to-rose-500' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-900 dark:text-white font-semibold">{skill.name}</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1.8 + index * 0.1, duration: 1 }}
                      className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
                Education
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                  MJP Rohilkhand University {/* Replace with actual university */}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Graduated
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Comprehensive program covering computer science fundamentals, programming languages, 
                  software development, database management, and web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-center mb-20"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>
            <div className="flex justify-center space-x-6 mb-8">
              {/* Update these URLs with actual social media links */}
              <a
                href="https://github.com/yash-johari"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-200 transform hover:scale-110" target='_blank'
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-johari-6575b41b9/"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200 transform hover:scale-110" target='_blank'
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/yashjohari/"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-200 transform hover:scale-110" target='_blank'
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:yashjohari2508@gmail.com"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-200 transform hover:scale-110" target='_blank'
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm passionate about creating digital experiences that make a difference. 
                Whether you're a startup looking to build your first web application or an 
                established business wanting to modernize your digital presence, I'm here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  1+ Years Experience
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  20+ Projects Completed
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  100% Client Satisfaction
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Home;