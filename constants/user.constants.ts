import thirdOne from "@/public/3-1.webp";
import thirdThree from "@/public/3-3.webp";
import thirdFour from "@/public/3-4.webp";
import thirdFive from "@/public/3-5.webp";
import thirdSix from "@/public/3-6.webp";
import thirdEight from "@/public/3-8.webp";
import fourthOne from "@/public/4-1.webp";
import fourthThree from "@/public/4-3.webp";
import fourthFour from "@/public/4-4.webp";
import fourthEight from "@/public/4-8.webp";
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
    src: thirdOne,
    visitCount: "첫 참여",
  },
  {
    id: 2,
    src: ManImage,
    visitCount: "첫 참여",
  },
  {
    id: 3,
    src: thirdThree,
    visitCount: "세 번째 참여",
  },
  {
    id: 4,
    src: thirdFour,
    visitCount: "첫 참여",
  },
  {
    id: 5,
    src: thirdFive,
    visitCount: "첫 참여",
  },
  {
    id: 6,
    src: thirdSix,
    visitCount: "첫 참여",
  },
  {
    id: 7,
    src: WomanImage,
    visitCount: "첫 참여",
  },
  {
    id: 8,
    src: thirdEight,
    visitCount: "두 번째 참여",
  },
  {
    id: 9,
    src: fourthOne,
    visitCount: "첫 참여",
  },
  {
    id: 10,
    src: ManImage,
    visitCount: "첫 참여",
  },
  {
    id: 11,
    src: fourthThree,
    visitCount: "첫 참여",
  },
  {
    id: 12,
    src: fourthFour,
    visitCount: "첫 참여",
  },
  {
    id: 13,
    src: ManImage,
    visitCount: "첫 참여",
  },
  {
    id: 14,
    src: ManImage,
    visitCount: "첫 참여",
  },
  {
    id: 15,
    src: fourthEight,
    visitCount: "첫 참여",
  },
];
