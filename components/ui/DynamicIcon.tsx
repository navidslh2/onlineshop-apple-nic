import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { LucideProps } from "lucide-react";
import dynamic from "next/dynamic";
import React, { ComponentType, useMemo, type SVGProps } from "react";


const muiIconMap = {
  PhoneIphoneIcon: () =>
    import("@mui/icons-material/PhoneIphone").then(
      (m) => m.default as ComponentType
    ),
  TabletMacIcon: () =>
    import("@mui/icons-material/TabletMac").then(
      (m) => m.default as ComponentType
    ),
    CableIcon: () =>
    import("@mui/icons-material/Cable").then(
      (m) => m.default as ComponentType
    ),
        ClassIcon: () =>
    import("@mui/icons-material/Class").then(
      (m) => m.default as ComponentType
    ),
} as const;

type muiIconName = keyof typeof muiIconMap;

export type IconId = muiIconName;

type Props = {
  icon: IconId;
  size?:number
  className: string;
}& SvgIconProps;

const DynamicIcon = ({ icon, className, size }: Props) => {
  const loaderFn = muiIconMap[icon];
  const Dyn = dynamic<SvgIconProps>(loaderFn, { ssr: false });

  const style = { fontSize: size };
  return <Dyn className={className} style={style}/>;
};

export default DynamicIcon;
