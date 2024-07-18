import { fetchUser } from "@/api/fetchUserList";

type PersonalPageProps = {
  params: { slug: string[] };
};

export default async function PersonalPage({
  params,
}: PersonalPageProps) {
  const messasgeData = await fetchUser(params.slug[0]);

  return (
    <main className="flex flex-col items-center justify-between px-4">
      <div className="flex h-[100dvh] w-full max-w-xl flex-col items-center border-black bg-white text-mainColor">
        <span className="p-4 text-4xl">Funnection</span>
        <div>
          <span className="text-3xl">
            {messasgeData[0].user.nickname} 님
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {messasgeData.map((message) => (
            <div
              key={message.id}
              className="w-full rounded-lg bg-[#334155] p-4 text-lg text-white"
            >
              <span>{message.message}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
