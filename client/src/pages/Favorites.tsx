import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Favorites = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-destructive fill-current" />
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Your Favorites
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Save your favorite resources for quick access
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl border-2 border-dashed border-border/50 p-12 text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            
            <h2 className="font-display text-2xl font-bold">
              No favorites yet
            </h2>
            
            <p className="text-muted-foreground">
              Start exploring resources and click the heart icon to save your favorites here.
            </p>
            
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all mt-4"
            >
              Explore Resources
            </a>
          </div>
        </motion.div>

        {/* Placeholder cards for future implementation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-30"
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-card border border-border/50 animate-pulse"
            >
              <div className="aspect-video bg-muted" />
              <div className="p-4 space-y-2">
                <div className="h-6 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
                <div className="h-4 bg-muted rounded w-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;
