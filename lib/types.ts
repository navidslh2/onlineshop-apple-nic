export interface Products {
  category_id?: number;
  product_name: string;
  capacity: string;
  img?: string;
}

export interface Categories {
  id: number;
  name: string;
  e_name?: string;
  icon?: string;
}
