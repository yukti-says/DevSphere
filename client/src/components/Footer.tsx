import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/50 bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <span className="text-2xl">🌐</span>
            <span className="font-display text-2xl font-bold">DevSphere</span>
          </div>
          
          <p className="text-primary-foreground/90 text-sm">
            Explore. Learn. Build. — Everything a developer needs, in one hub.
          </p>
          
          <p className="text-primary-foreground/80 text-sm">
            Built with 💻 & ☕ by <span className="font-semibold">Yukti Sahu</span>
          </p>
          
          <p className="text-primary-foreground/60 text-xs">
            © {currentYear} DevSphere. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
