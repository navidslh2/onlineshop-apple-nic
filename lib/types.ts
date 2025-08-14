import type { Icon } from "next/dist/lib/metadata/types/metadata-types";

export interface Products {
  category_id: number;
  product_name: string;
  capacity?: string;
  img: string;
  minPrice: number;
  colors: string;
  brand: string;
  simcard?: string;
  parentId: number;
  categoriesName: string;
  stock: number;
}

export interface Categories {
  id: number;
  name: string;
  eName?: string;
  parent_id?: number;
  slug: string;
  icon?: "PhoneIphoneIcon" | "TabletMacIcon" | "CableIcon" |"ClassIcon" ;
  img?:string
  description?: string
}
