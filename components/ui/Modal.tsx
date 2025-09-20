import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React, { useEffect } from "react";

interface Props {
  modalProperty: { isOpen?: boolean; text?: string; color?: string };
  onClose:()=> void
}
const Modal = ({ modalProperty, onClose }: Props) => {
    useEffect(()=>{
        setTimeout(()=>{
            onClose()
        },3000)
    },[modalProperty])
  return (
    <AnimatePresence>
      {modalProperty.isOpen &&
        <motion.div
          className={`fixed left-10 bottom-15 p-4 border rounded-md ${
            modalProperty.color === "red"
              ? "bg-red-300/90 border-red-600"
              : "bg-green-300/90 border-green-600"
          }`}
          initial={{translateX:"-120%"}}
          animate={{translateX: 0}}
          exit={{translateX:"-120%"}}
          transition={{duration: 0.5, ease: easeInOut}}
        >
          {modalProperty.text}
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default Modal;
