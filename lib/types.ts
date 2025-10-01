import type { Icon } from "next/dist/lib/metadata/types/metadata-types";

export interface Products {
  id: number;
  category_id: number;
  product_name: string;
  eName: string;
  capacity?: string;
  capacityEName: string;
  img: string;
  minPrice: number;
  colors: string;
  brand: string;
  simcard?: string;
  parentId: number;
  categoriesName: string;
  slug: string;
  categoryEName: string;
  stock: number;
  warranty?: string;
  partNumber?: string;
  activeStatus?: string;
  color?: string;
  productEName: string;
  discount: number
  monitorSize: string
}

export interface Categories {
  id: number;
  name: string;
  eName?: string;
  parent_id?: number;
  slug: string;
  icon?: "PhoneIphoneIcon" | "TabletMacIcon" | "CableIcon" | "ClassIcon";
  img?: string;
  description?: string;
}

export interface ProductsItem {
  id: number;
  categoryId: number;
  categoryEName: string;
  capacityEName: string;
  productName: string;
  capacity?: string;
  monitorSize?: string;
  stock: number;
  url: string;
  price: number;
  color: string;
  warranty?: string;
  partNumber?: string;
  activeStatus?: string;
  productEName: string;
  brand:string
  slug:string
  discount:number
}

export interface Rating {
  productItemId: number;
  avgRating: number;
  count: number;
}

export interface cart {
  quantity: number
  productId: number
  cartId?: number
}

export interface ModalProperty {
  isOpen?: boolean;
  text?: string;
  color?: string;
}

