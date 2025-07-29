import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'RESTful APIs', level: 75 },
        { name: 'EJS', level: 75 },
        { name: 'Axios', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'npm/yarn', level: 68 },
        { name: 'Postman', level: 80 },
        { name: 'Chrome DevTools', level: 85 },
        { name: 'Figma', level: 70 },
      ],
    },
  ];

  const certifications = [
    'Full Stack Web Development',
    'React.js Development',
    'Node.js Backend Development',
    'Database Management',
  ];

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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, duration: 1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certifications & Learning
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices. I believe in learning by doing and constantly challenging 
              myself with new projects and technologies.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Skills;