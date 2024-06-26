import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ImageOne from "@/public/images/image-one.png";
import ImageThree from "@/public/images/image-three.png";
import ImageTwo from "@/public/images/image-two.png";
import { PanelDetail } from '@/types';

type PanelProps = {
  panel: PanelDetail;
  activePanel: PanelDetail | null;
  index: number;
  handlePanelClick: (panel: PanelDetail) => void;
};

const Panel: React.FC<PanelProps> = ({ panel, activePanel, index, handlePanelClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      onClick={() => handlePanelClick(panel)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
    >
      <div
        className={`relative w-full h-80 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${
          activePanel?.title === panel.title ? "bg-white" : ""
        }`}
      >
        {activePanel?.title !== panel.title && (
          <Image
            src={index === 0 ? ImageOne : index === 1 ? ImageTwo : ImageThree}
            alt={panel.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        )}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
            activePanel?.title === panel.title ? "bg-white text-black" : "bg-black bg-opacity-50 text-white"
          }`}
        >
          <span className="text-3xl font-bold">{panel.title}</span>
          <ChevronDown
            className={`h-8 w-8 mt-4 transition-transform duration-300 ${
              activePanel?.title === panel.title ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Panel;
