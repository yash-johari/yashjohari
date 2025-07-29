import React from 'react';
import { Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yash-johari', 
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/yash-johari-6575b41b9/', 
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/yashjohari/', 
      label: 'Instagram',
    },
    {
      icon: Mail,
      href: 'mailto:yashjohari2508@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Yash Johari
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building exceptional web experiences using modern technologies and frameworks. Skilled in designing scalable architectures, writing clean and efficient code, and delivering innovative, user-focused solutions that enhance performance, accessibility, and overall user engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Home
              </a>
              <a href="/about" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                About
              </a>
              <a href="/skills" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Skills
              </a>
              <a href="/projects" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Projects
              </a>
              <a href="/experience" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Experience
              </a>
              <a href="/education" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Education
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: yashjohari2508@gmail.com</p> 
              <p>Phone: +91 9368078701</p>
              <p>Location: Bareilly, Uttar Pradesh, India</p> {/* Replace with actual location */}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Yash Johari. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;