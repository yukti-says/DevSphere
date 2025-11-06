import { motion } from 'framer-motion';
import { Code2, Sparkles, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Curated Resources',
    description: 'Hand-picked tutorials, repositories, and blogs from the best sources on the web.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Interface',
    description: 'Modern, clean design with smooth animations and a delightful user experience.',
  },
  {
    icon: Target,
    title: 'Developer Focused',
    description: 'Built by developers, for developers. Everything you need in one place.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures you spend less time searching, more time learning.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">DevSphere</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DevSphere is your ultimate developer resource hub, designed to help you find 
            the best learning materials, code repositories, technical blogs, and inspiring 
            wallpapers for any technology you're interested in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl bg-gradient-primary p-8 text-center space-y-4"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
            Our Mission
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-2xl mx-auto">
            To empower developers worldwide by providing a centralized platform where they can 
            discover, learn, and grow. We believe that access to quality resources should be 
            simple, beautiful, and free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Have suggestions or feedback?
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
