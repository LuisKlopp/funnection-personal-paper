import { fetchUser } from "@/api/fetchUserList";
import UserProfileImage from "@/components/user-profile-image";
import Link from "next/link";
// import UserProfileImage from "@/components/user-profile-image";

type PersonalPageProps = {
  params: { slug: string[] };
};

export default async function PersonalPage({
  params,
}: PersonalPageProps) {
  const messageAndUserData = await fetchUser(params.slug[0]);

  const { messages, user } = messageAndUserData;

  return (
    <main className="flex flex-col items-center justify-between px-4">
      <div className="flex h-[100dvh] w-full max-w-xl flex-col gap-4 border-black bg-white text-mainColor">
        <Link href="/" className="py-4 text-4xl">
          Funnection
        </Link>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="user-list-button flex h-44 w-[150px] justify-start mdl:h-48 mdl:w-[150px]">
            <UserProfileImage
              userId={user.id}
              checkImage={user.checkImagePath}
              gender={user.gender}
            />
          </div>
          <div className="flex w-full">
            <span className="text-2xl">
              {user.nickname} 님 <br />
              <span>{user.visitCount} 감사드려요~</span>
              <br />
              <span>항상 행복하시길 바랍니다!</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
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
