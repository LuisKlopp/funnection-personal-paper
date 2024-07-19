import { fetchUser } from "@/api/fetchUserList";
import { USER_LIST, UserImageType } from "@/constants/user.constants";
import Image from "next/image";
import Link from "next/link";

type PersonalPageProps = {
  params: { slug: string[] };
};

export default async function PersonalPage({
  params,
}: PersonalPageProps) {
  const messageData = await fetchUser(params.slug[0]);
  const userImage = USER_LIST.find(
    (img) => img.id === Number(messageData[0].user.id),
  );

  const imageSrc = (userImage as UserImageType).src;

  return (
    <main className="flex flex-col items-center justify-between px-4">
      <div className="flex h-[100dvh] w-full max-w-xl flex-col gap-4 border-black bg-white text-mainColor">
        <Link href="/" className="py-4 text-4xl">
          Funnection
        </Link>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="user-list-button flex h-44 w-[150px] justify-start mdl:h-48 mdl:w-[150px]">
            <Image
              className="h-full w-full rounded-lg"
              alt="default-image"
              priority
              src={imageSrc}
            />
          </div>
          <div className="flex w-full">
            <span className="text-2xl">
              {messageData[0].user.nickname} 님 <br />
              <span>와주셔서 감사해요</span>
              <br />
              <span>항상 행복하시길 바랍니다!</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {messageData.map((message, index) => (
            <div
              key={message.id}
              className="message-box w-full rounded-lg bg-[#334155] p-4 text-lg text-white"
            >
              <span className="text-sm mdl:text-lg">
                {index + 1}. {message.message}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
