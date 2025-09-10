'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
}

interface GalleryCategory {
  id: string;
  label: string;
  icon?: string;
}

interface ModernGalleryProps {
  images: GalleryImage[];
  categories: GalleryCategory[];
  className?: string;
}

const ModernGallery = ({ images, categories, className = '' }: ModernGalleryProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  // Filter images based on active filter
  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') {
      return images;
    }
    return images.filter(image => image.category === activeFilter);
  }, [images, activeFilter]);

  // Handle image load
  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => [...prev, imageId]);
  };

  // Get grid class based on aspect ratio
  const getGridClass = (aspectRatio?: string, index?: number) => {
    switch (aspectRatio) {
      case 'wide':
        return 'md:col-span-2';
      case 'portrait':
        return 'md:row-span-2';
      case 'landscape':
        return 'col-span-1';
      default:
        // Add some variety to the layout for regular images
        if (index && index % 7 === 0) return 'md:col-span-2';
        if (index && index % 11 === 0) return 'md:row-span-2';
        return 'col-span-1';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Filter Buttons */}
      <ScrollAnimation className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            onClick={() => setActiveFilter('all')}
            className={`${
              activeFilter === 'all'
                ? 'bg-sage-darkest text-white shadow-lg'
                : 'bg-white text-sage-darkest border border-sage-dark/20 hover:bg-sage-dark/5'
            } rounded-full px-6 py-2.5 transition-all duration-300 font-medium`}
          >
            All Images
            <span className="ml-2 text-xs opacity-70">({images.length})</span>
          </Button>
          {categories.map((category) => {
            const count = images.filter(img => img.category === category.id).length;
            return (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id
                    ? 'bg-sage-darkest text-white shadow-lg'
                    : 'bg-white text-sage-darkest border border-sage-dark/20 hover:bg-sage-dark/5'
                } rounded-full px-6 py-2.5 transition-all duration-300 font-medium`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.label}
                <span className="ml-2 text-xs opacity-70">({count})</span>
              </Button>
            );
          })}
        </div>
      </ScrollAnimation>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]"
      >
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeFilter}-${image.id}`}
              variants={itemVariants}
              layout
              className={`group relative overflow-hidden rounded-xl bg-sage-dark/5 ${getGridClass(image.aspectRatio, index)}`}
            >
              {/* Loading skeleton */}
              {!loadedImages.includes(image.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-sage-dark/10 to-sage-dark/5 animate-pulse" />
              )}

              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                onLoad={() => handleImageLoad(image.id)}
                className={`
                  w-full h-full object-cover transition-all duration-700 
                  group-hover:scale-110 
                  ${loadedImages.includes(image.id) ? 'opacity-100' : 'opacity-0'}
                `}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-darkest/80 via-sage-darkest/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white font-ivy-headline text-lg mb-1 line-clamp-2">
                  {image.alt}
                </h3>
                <p className="text-champagne text-sm font-ivy-body capitalize tracking-wide">
                  {categories.find(cat => cat.id === image.category)?.label || image.category}
                </p>
                
                {/* Featured badge */}
                {image.featured && (
                  <div className="absolute top-4 right-4 bg-champagne text-sage-darkest px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 border-2 border-champagne/0 group-hover:border-champagne/30 transition-all duration-500 rounded-xl pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Results count */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sage-darker/60 font-ivy-body">
          Showing {filteredImages.length} of {images.length} images
          {activeFilter !== 'all' && (
            <span className="ml-2">
              in <span className="text-sage-darkest font-medium">
                {categories.find(cat => cat.id === activeFilter)?.label}
              </span>
            </span>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default ModernGallery;
