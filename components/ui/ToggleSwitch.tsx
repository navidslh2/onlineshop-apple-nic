import { motion } from "framer-motion";

interface Props {
    toggle:boolean
    toggleHandler:()=>void
}

const ToggleSwitch = ({toggle, toggleHandler}:Props) => {
  return (
    <div className="relative">
      <button
        className={` w-10 h-5 rounded-xl cursor-pointer ${
          toggle ? "bg-amber-400" : "bg-gray-300"
        }`}
        onClick={toggleHandler}
      />
      <motion.span
        className={`bg-gray-100 right-0 w-5 h-5 rounded-full absolute shadow cursor-pointer ${toggle ? 'right-0': "right-5"} `}
        onClick={toggleHandler}
        layout
      />
    </div>
  );
};

export default ToggleSwitch;
