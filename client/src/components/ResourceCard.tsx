import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';
import { useState } from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  author?: string;
  thumbnail: string;
  url: string;
  type: 'tutorial' | 'repository' | 'blog' | 'wallpaper';
}

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard = ({ resource, index }: ResourceCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-xl overflow-hidden bg-card border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-glow"
    >
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        
        {resource.author && (
          <p className="text-sm text-muted-foreground">by {resource.author}</p>
        )}
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>

        <div className="flex items-center gap-2 pt-2">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
          >
            <span>View</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-lg transition-all ${
              isFavorite
                ? 'bg-destructive text-destructive-foreground'
                : 'bg-secondary hover:bg-secondary/80'
            }`}
            aria-label="Add to favorites"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
