import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'MJP Rohilkhand University', 
      location: 'Bareilly, Uttar Pradesh', 
      duration: '2022 - 2025',
      status: 'Graduated',
      gpa: 'CGPA: 7.0/10',
      description: 'Comprehensive program covering computer science fundamentals, programming languages, software development, database management, and web technologies.',
      coursework: [
        'Data Structures',
        'Database Management Systems',
        'Web Development Technologies',
        'Software Engineering',
        'Computer Networks',
        'Operating Systems',
        'Programming in Java, C++, Python',
        'Object-Oriented Programming',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2025',
      description: 'Comprehensive course covering React.js, Node.js, Express, and database management',
    },
    {
      name: 'Wordpress Development',
      issuer: 'Udemy',
      date: '2024',
      description: 'Advanced WordPress development, custom themes, plugins, and content management',
    },
    {
      name: 'Top 25th Percentile Overall Globally',
      issuer: 'The Talent Games',
      date: '2024',
      description: 'Ranked in top 25% globally in C-Factor assessment',
    },
  ];

  const skills = [
    'Problem Solving',
    'Analytical Thinking',
    'Team Collaboration',
    'Project Management',
    'Technical Documentation',
    'Continuous Learning',
  ];

  const achievements = [
    'Got shortlisted for the interview round of Google Developer Student Club (GDSC) Lead',
    'Served as a Campus Ambassador at my college',
    'Led multiple group projects and presentations',
    'Completed internship while pursuing degree',
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Academic background, certifications, and continuous learning journey
            </p>
          </motion.div>

          {/* Education Details */}
          <div className="mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                      <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {edu.institution}
                    </div>
                    <div className="text-lg text-green-600 dark:text-green-400 font-medium">
                      {edu.gpa}
                    </div>
                  </div>
                  <div className="lg:text-right mt-4 lg:mt-0">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    Key Coursework
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {edu.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Additional Learning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-yellow-500 mr-3" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Academic Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3" />
                Academic Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg text-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Future Learning Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              Education doesn't end with graduation. I'm committed to staying current with emerging 
              technologies, pursuing advanced certifications, and continuously expanding my skill set. 
              The tech industry evolves rapidly, and I believe in learning by doing and adapting to new challenges.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 italic">
              "The beautiful thing about learning is that no one can take it away from you." - B.B. King
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Education;