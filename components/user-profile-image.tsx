import Image from "next/image";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";

interface UserProfileImageProps {
  userId: number;
  checkImage: number;
  gender: string;
}

const UserProfileImage = ({
  userId,
  checkImage,
  gender,
}: UserProfileImageProps) => {
  const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const checkIsMan = gender === "M" ? ManImage : WomanImage;

  const imageUrl = `${s3BaseUrl}/funnection-${userId}.webp`;

  return (
    <Image
      className="h-full w-full rounded-lg"
      alt="user-profile-image"
      priority
      src={checkImage ? imageUrl : checkIsMan}
      width={150}
      height={176}
    />
  );
};

export default UserProfileImage;
