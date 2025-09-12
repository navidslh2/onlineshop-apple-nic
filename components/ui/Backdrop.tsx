import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
  showMenuBagHandler: () => void;
  isShow: boolean;
}

const Backdrop = ({ isShow, showMenuBagHandler }: Props) => {
  return (
    <AnimatePresence>
      {isShow && <motion.div className="fixed w-screen h-screen hoverEffect bg-gray-500/50 backdrop-blur-xs z-20"  onClick={showMenuBagHandler}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration:0.2, ease: "easeInOut"}}
      />}
    </AnimatePresence>
  );
};

export default Backdrop;
