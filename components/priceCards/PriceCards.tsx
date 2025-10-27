import React from "react";
import PriceCard from "./PriceCard";
import type { ProductsItem } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  productItem: ProductsItem[];
  activeCard: number | null;
  activeCardHandler: (id: number) => void;
}

const PriceCards = ({ productItem, activeCard, activeCardHandler }: Props) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardItem = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  if (productItem.length === 0 ) return <div className="m-auto">کالای مورد نظر یافت نشد</div>
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col md:grid md:grid-cols-2 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {productItem.map((item) => (
          <motion.div
            key={item.id}
            variants={cardItem}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <PriceCard
              productItem={item}
              activeCard={activeCard}
              activeCardHandler={activeCardHandler}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PriceCards  ;
