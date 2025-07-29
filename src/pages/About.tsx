import React from 'react';
import { Code, Coffee, Heart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '1+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies Mastered', value: '10+' },
    { label: 'Coffee Cups', value: '1000+' },
  ];

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly learning new technologies and implementing cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Creating intuitive and delightful user experiences that solve real problems.',
    },
    {
      icon: Coffee,
      title: 'Dedication',
      description: 'Committed to delivering high-quality work and exceeding expectations.',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate Full Stack Developer dedicated to creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm Yash Johari, a passionate Full Stack Web Developer with a strong foundation in modern 
                  web technologies. Having completed my BCA, I'm currently working as a developer intern at 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> Cyberpassion Technologies Pvt Ltd</span>, 
                  where I contribute to innovative web solutions and gain valuable industry experience.
                </p>
                <p>
                  My expertise spans across the full development stack, with proficiency in React.js for 
                  creating dynamic user interfaces, Node.js and Express for robust backend development, 
                  and PostgreSQL for efficient data management. I also work extensively with HTML, CSS, 
                  JavaScript, EJS, and Axios to deliver comprehensive web solutions.
                </p>
                <p>
                  Beyond my internship, I actively freelance in website development, helping businesses 
                  and individuals bring their digital visions to life. This diverse experience has taught 
                  me to adapt quickly to new challenges and deliver solutions that not only meet technical 
                  requirements but also provide exceptional user experiences.
                </p>
                <p>
                  I'm passionate about staying current with emerging technologies and best practices in 
                  web development. Whether it's optimizing performance, implementing responsive designs, 
                  or architecting scalable applications, I approach every project with enthusiasm and 
                  attention to detail.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Stats
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              What Drives Me
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default About;