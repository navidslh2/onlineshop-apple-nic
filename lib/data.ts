export const headerData = [
  {
    id: 2,
    title: "فروش ویژه",
    href: "/onsale",
    tooltip: "onsale",
    logo: "/sale-free-4-svgrepo-com.svg",
  },
  {
    id: 3,
    title: "مک",
    href: "/mac",
    tooltip: "mac",
    logo: "/mac-svgrepo-com.svg",
    img:"/macs.webp"
  },
  {
    id: 4,
    title: "آیفون",
    href: "/iphone",
    tooltip: "iphone",
    logo: "/iphone10-svgrepo-com.svg",
    img:"/iphone16e.webp"
  },
  {
    id: 5,
    title: "آیپد",
    href: "/ipad",
    tooltip: "ipad",
    logo: "/ipad-svgrepo-com.svg",
    img:"/ipads.webp"
  },
  {
    id: 6,
    title: "ایرپاد",
    href: "/airpod",
    tooltip: "airpod",
    logo: "/airpods-pro-svgrepo-com.svg",
    img:"/airpodss.webp"
  },
  {
    id: 7,
    title: "اپل واچ",
    href: "/watch",
    tooltip: "apple watch",
    logo: "/watch-alt-svgrepo-com.svg",
    img:"/apple-watchs.webp"
  },
  {
    id: 8,
    title: "لوازم جانبی",
    href: "/C",
    tooltip: "accessories",
    logo: "/wristwatch-outline-svgrepo-com.svg",
    img:"/accesorynew.webp"
  },
  {
    id: 9,
    title: "صدا و تصویر",
    href: "/accessories/headphone-speaker",
    tooltip: "/audio and visual device",
    logo: "speaker-svgrepo-com.svg",
    img:"/audio-visual.webp"
  },
  {
    id: 10,
    title: "قیمت روز",
    href: "/price-list",
    tooltip: "price",
    logo: "/document-filled-svgrepo-com.svg",
  },
  {
    id: 11,
    title: "محصولات کارکرده",
    href: "/stockproduct",
    tooltip: "trade",
    logo: "",
  },
  {
    id: 12,
    title: "تماس با ما",
    href: "/contact-us",
    tooltip: "contact us",
    logo: "/phone-call-svgrepo-com.svg",
  },
];

export interface StoreItem {
  id: number;
  title: string;
  className?: string;
  href?: string;
}

export const store: StoreItem[] = [
  { id: 1, title: "فروشگاه", className: "font-bold" },
  { id: 2, title: "مک", href:"/" },
  { id: 3, title: "آیپد", href:"/"  },
  { id: 4, title: "آیفون", href:"/" },
  { id: 5, title: "اپل واچ", href:"/" },
  { id: 6, title: "اپل تی وی", href:"/" },
  { id: 7, title: "ایرپاد اپل", href:"/" },
];
export interface AccessoriesItem {
  id: number;
  title: string;
  className?: string;
  href?: string;
}

export const accessories:AccessoriesItem[] = [
  { id: 1, title: "جانبی اپل", className: "font-bold" },
  { id: 2, title: "لوازم جانبی آیفون", href:"/" },
  { id: 3, title: "لوازم جانبی مک", href:"/" },
  { id: 4, title: "لوازم جانبی آیپد", href:"" },
  { id: 5, title: "لوازم جانبی اپل واچ", href:"" },
  { id: 6, title: "اورجینال اپل", href:"" },
  { id: 7, title: "لوازم جانبی سبک زندگی", href:"" },
];

export interface NewProductItem {
  id: number;
  title: string;
  className?: string;
  href?: string;
}

export const newProduct:NewProductItem[] = [
  { id: 1, title: "محصولات جدید 2025", className: "font-bold" },
  { id: 2, title: "قیمت آیفون 16 پرو مکس", href:"" },
  { id: 3, title: "قیمت آیفون 16 پرو", href:"" },
  { id: 4, title: "قیمت آیفون 16", href:"" },
  { id: 5, title: "قیمت آیفون 16 پلاس", href:"" },
  { id: 6, title: "اپل واچ اولترا 2", href:"" },
  { id: 7, title: "قیمت اپل واچ سری 10", href:"" },
];

export interface AfterSalesServiceItem {
  id: number;
  title: string;
  className?: string;
  href?: string;
}

export const afterSalesService:AfterSalesServiceItem[] = [
  { id: 1, title: "خدمات پس از فروش", className: "font-bold" },
  { id: 2, title: "گیفت کارت اپل", href:"" },
  { id: 3, title: "گیفت کارت پلی استیشن", href:"" },
  { id: 4, title: "گیفت کارت استیم", href:"" },
  { id: 5, title: "گیفت کارت ایکس باکس", href:"" },
  { id: 6, title: "گیفت کارت پابجی", href:"" },
  { id: 7, title: "گیفت کارت روبلاکس", href:"" },
];

export interface ContactInformationItem {
  id: number;
  title: string;
  className?: string;
  href?: string;
}

export const contactInformation:ContactInformationItem[] = [
  { id: 1, title: "اطلاعات تماس" },
  { id: 2, title: "تماس با ما", href:"" },
  { id: 3, title: "درباره ما", href:"" },
  { id: 4, title: "نقشه سایت", href:"" },
  { id: 5, title: "قوانین سایت", href:"" },
  { id: 6, title: "ضمانت بازگشت کالا", href:"" },
  { id: 7, title: "رجیستری", href:"/" },
];

export const certificate =[
  {id:1, href:"/nic.webp",alt:"mag.apple"},
  {id:2,href:"/giftcard.webp",alt:"gift-card"},
  {id:3 ,href:"/businessunion.png",alt:"business-union"},
  {id:4,href:"/enamad.png",alt:"enamad"}
]



