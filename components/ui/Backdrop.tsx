import React from "react";

interface Props {
  showMenuBagHandler: () => void;
  isShow: boolean;
}

const Backdrop = ({ isShow, showMenuBagHandler }: Props) => {
  return (
    <>
      {isShow && <div className="fixed w-screen h-screen backdrop-blur-xs z-20"  onClick={showMenuBagHandler}/>}
    </>
  );
};

export default Backdrop;
