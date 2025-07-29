import React from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Footer from '../components/Footer';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Developer Intern',
      company: 'Cyberpassion Technologies Pvt Ltd',
      location: 'Remote',
      duration: 'Feb. 2025 - Present',
      type: 'Internship',
      description: 'Working as a developer intern, contributing to innovative web solutions and gaining valuable industry experience. Collaborating with senior developers on various projects involving React.js, Node.js, and modern web technologies.',
      responsibilities: [
        'Built responsive apps using React and Next.js',
        'Customized WordPress themes and integrated plugins',
        'Developed RESTful APIs with Node and Express',
        'Collaborated with team to deliver features',
        'Handled data using PostgreSQL database queries',
        'Improved UI/UX for better performance',
      ],
      skills: ['React.js', 'Node.js', 'Next.js', 'PostgreSQL', 'Wordpress', 'Postman'],
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      duration: '2024 - Present',
      type: 'Freelance',
      description: 'Providing freelance web development services to various clients, helping businesses and individuals bring their digital visions to life. Specializing in full-stack development with a focus on modern, responsive designs.',
      responsibilities: [
        'Developing custom websites from concept to deployment',
        'Creating responsive designs that work across all devices',
        'Implementing e-commerce solutions and payment integrations',
        'Building content management systems for client needs',
        'Providing technical consultation and project planning',
        'Maintaining and updating existing websites and applications',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'EJS', 'Responsive Design'],
    },
  ];

  const achievements = [
    'Successfully completed 5+ client projects with 100% satisfaction rate',
    'Reduced application load times by 40% through optimization techniques',
    'Implemented responsive designs that improved mobile user experience',
    'Collaborated effectively in agile development environments',
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional journey and work experience in web development
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        experience.type === 'Internship' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {experience.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {experience.company}
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <Star className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking new challenges and opportunities to grow as a developer. 
              Let's discuss how I can contribute to your next project.
            </p>
            <a
              href="/contact"
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

export default Experience;