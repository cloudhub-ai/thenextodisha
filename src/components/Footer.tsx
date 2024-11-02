import { Youtube, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Youtube, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
];

export function Footer() {
  return (
    <footer className="py-12 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
        <motion.p 
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} The Next Odisha. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}