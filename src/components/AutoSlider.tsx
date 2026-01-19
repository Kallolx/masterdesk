import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
];

const AutoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10 px-4 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full aspect-[3/1] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Banner ${index + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;
