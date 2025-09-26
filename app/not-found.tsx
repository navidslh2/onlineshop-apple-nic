import Logo from "@/components/logo/Logo";
import TextTitle from "@/components/ui/TextTitle";
import { Smile } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[500px]">
      <div className="flex gap-1">
        <TextTitle className="text-xl">به پروژه من خوش آمدید</TextTitle>
        <Smile className="text-green-700" />
      </div>
      <p className="text-center px-5">
        این پروژه در حال آماده سازی میباشد و در حال حاضر صفحات آیفون و آیپد فعال
        میباشد.
      </p>
      <div className="flex gap-4">
        <Link href="/iphone"  className="flex items-center justify-center px-3 py-2  rounded-lg bg-green-600 text-white shadow-md shadow-gray-500 hover:shadow-xl hover:scale-103 hoverEffect">
          آیفون
        </Link>
        <Link  href="/ipad"  className="flex items-center justify-center px-3  rounded-lg bg-green-600 text-white shadow-md shadow-gray-500 hover:shadow-xl hover:scale-103 hoverEffect" >
          آیپد
        </Link>
      </div>
    </div>
  );
}
