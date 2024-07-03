import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const images: CarouselImage[] = Array.from({ length: 20 }).map(
  (item, index) => ({
    id: index,
    src: `https://picsum.photos/id/${index}/500/500`,
    alt: `Image ${index + 1}`,
  })
);

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index: number) => {
    const totalImages = images.length;
    const angle =
      ((index - currentIndex + totalImages) % totalImages) *
      ((2 * Math.PI) / totalImages);
    const radius = 900; // Adjust this value to change the size of the circular layout
    const x = Math.sin(angle) * radius;
    const y = -Math.cos(angle) * radius;
    const scale = index === currentIndex ? 1 : 1;
    const zIndex = index === currentIndex ? 10 : 0;

    return { x, y, scale, zIndex };
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {/* <AnimatePresence initial={false}>
          <div className='carousel-track'>
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={getPosition(index)}
                animate={getPosition(index)}
                transition={{ duration: 0.5 }}
                className='carousel-item'
                style={{ x: '50%', y: '50%', originX: 0.5, originY: 0.5 }}
              >
                <img src={image.src} alt='' className='carousel-img' />
                <div className='carousel-badge'>{image.id}</div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence> */}
      </div>
      <div className='carousel-content'>
        <h2>Find out what planet lukuikui character you are</h2>
        <button
          className='carousel-button'
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;

