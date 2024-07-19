import firstImage from "@/public/3-1.webp";
import thirdImage from "@/public/3-3.webp";
import fourthImage from "@/public/3-4.webp";
import fifthImage from "@/public/3-5.webp";
import sixthImage from "@/public/3-6.webp";
import eighthImage from "@/public/3-8.webp";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";
import { StaticImageData } from "next/image";

export interface UserImageType {
  id: number;
  src: StaticImageData;
  visitCount: string;
}

export const USER_LIST: UserImageType[] = [
  {
    id: 1,
    src: firstImage,
    visitCount: "첫 참여",
  },
  {
    id: 2,
    src: ManImage,
    visitCount: "첫 참여",
  },
  {
    id: 3,
    src: thirdImage,
    visitCount: "두 번째 참여",
  },
  {
    id: 4,
    src: fourthImage,
    visitCount: "첫 참여",
  },
  {
    id: 5,
    src: fifthImage,
    visitCount: "첫 참여",
  },
  {
    id: 6,
    src: sixthImage,
    visitCount: "첫 참여",
  },
  {
    id: 7,
    src: WomanImage,
    visitCount: "첫 참여",
  },
  {
    id: 8,
    src: eighthImage,
    visitCount: "두 번째 참여",
  },
];
