import React from 'react';
import { motion } from 'framer-motion';

const MovingText = ({ text }: { text: string }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap py-4 bg-white z-500">
      <motion.div
        className="absolute whitespace-nowrap text-4xl lg:text-6xl font-bold z-500"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear'
        }}
      >
        <span className="text-blue-500 mx-8">{text}</span>
        <span className="text-blue-500 mx-8">{text}</span>
      </motion.div>
    </div>
  );
};

export default MovingText;
