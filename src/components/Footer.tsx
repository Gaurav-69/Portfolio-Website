import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Gaurav Rautela</h3>
            <p className="text-gray-400 mb-4">
              A passionate web developer focused on creating beautiful,
              functional and user-friendly websites and applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Gaurav-69/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-rautela-448978248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://x.com/_Gaurav_rautela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">San Francisco, CA</p>
            <p className="text-gray-400 mb-2">johndoe@example.com</p>
            <p className="text-gray-400 mb-4">+1 (555) 123-4567</p>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Gaurav Rautela. All rights reserved.
          </p>
          <div className="flex items-center">
            <p className="text-gray-500 ml-2">Made with ❤️ and ☕ by Gaurav</p>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
