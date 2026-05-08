'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface ProductCarouselProps {
  images: CarouselImage[];
  productName: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ProductCarousel({
  images,
  productName,
  autoPlay = true,
  autoPlayInterval = 5000
}: ProductCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovering, images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {/* Main Carousel */}
      <div
        className="relative flex-1 bg-gray-900 rounded-3xl overflow-hidden group shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Animated gradient effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-purple-500/0"
          animate={{
            backgroundImage: [
              'linear-gradient(to right, rgba(168, 85, 247, 0), rgba(236, 72, 153, 0), rgba(168, 85, 247, 0))',
              'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))',
              'linear-gradient(to right, rgba(168, 85, 247, 0), rgba(236, 72, 153, 0), rgba(168, 85, 247, 0))',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur transition duration-300"
          aria-label="Previous image"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur transition duration-300"
          aria-label="Next image"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 backdrop-blur">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            animate={{ width: `${((current + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Image Counter */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur"
          animate={{ opacity: isHovering ? 0.7 : 0.5 }}
        >
          {current + 1} / {images.length}
        </motion.div>

        {/* Auto-play indicator */}
        {autoPlay && !isHovering && (
          <motion.div className="absolute top-4 right-4 flex items-center gap-2 text-white text-xs bg-black/30 px-3 py-1 rounded-full backdrop-blur">
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Auto-playing
          </motion.div>
        )}
      </div>

      {/* Animated Thumbnails */}
      <div className="flex gap-2 md:gap-3 justify-center overflow-x-auto py-3 md:py-4 bg-black/20 backdrop-blur">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`relative flex-shrink-0 h-16 w-16 md:h-20 md:w-20 rounded-xl overflow-hidden border-2 transition ${
              index === current ? 'border-purple-500 shadow-lg shadow-purple-500/50' : 'border-gray-300 hover:border-purple-300'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: index === current
                ? '0 0 20px rgba(168, 85, 247, 0.5)'
                : '0 0 0px rgba(168, 85, 247, 0)'
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            {index === current && (
              <motion.div
                className="absolute inset-0 border-2 border-purple-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
