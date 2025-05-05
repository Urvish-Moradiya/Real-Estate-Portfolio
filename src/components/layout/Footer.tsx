
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-charcoal text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-playfair text-xl font-semibold mb-4">
              <span className="text-estate">Serene</span>Estate
            </h2>
            <p className="text-sm text-gray-300 mt-4 max-w-xs">
              Designing dreams and building reality with premium craftsmanship and attention to detail since 2005.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-estate transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-estate transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-estate transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-estate transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-estate transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-estate transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-300 hover:text-estate transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-300 hover:text-estate transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Architecture</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Interior Design</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Project Management</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Turnkey Solutions</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-estate transition-colors">Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">123 Builder Avenue</li>
              <li className="text-sm text-gray-300">New York, NY 10001</li>
              <li className="text-sm text-gray-300">info@sereneestate.com</li>
              <li className="text-sm text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SereneEstate. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-xs text-gray-400 hover:text-estate transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-400 hover:text-estate transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-xs text-gray-400 hover:text-estate transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
