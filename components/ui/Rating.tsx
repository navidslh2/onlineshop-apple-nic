import type { Rating as RatingType } from "@/lib/types";
import { Star } from "lucide-react";
import React from "react";
import Text from "./Text";

interface Props {
  rating: RatingType[];
}
const Rating = ({ rating }: Props) => {
  const ratingNumber = Math.ceil(rating[0]?.avgRating ?? 0);
  const count = rating[0]?.count ?? 0
  return (
    <div className="flex gap-3">
      <Text className="font-bold">امتیاز:</Text>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            size={15}
            key={index}
            className={`${
              index < ratingNumber
                ? "fill-blue-600 text-blue-600"
                : "fill-gray-300  text-gray-300"
            }`}
          />
        ))}
      </div>
      <div>
        <Text className="text-xs" >{Number(Number(rating[0]?.avgRating ?? 0).toFixed(1)).toLocaleString("fa-IR")} از  {Number(count).toLocaleString("fa-IR")}</Text>
      </div>
    </div>
  );
};

export default Rating;
