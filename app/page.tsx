import { fetchUserList } from "@/api/fetchUserList";
import Link from "next/link";

export default async function Home() {
  const userData = await fetchUserList();

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex h-[100dvh] w-full max-w-xl flex-col items-center border-black bg-white text-mainColor">
        <span className="p-4 text-4xl">Funnection</span>
        <div className="flex flex-col gap-4">
          {userData.map((user) => (
            <Link key={user.id} href={`/${user.generateString}`}>
              <div className="w-[100px] border-2 border-black p-4 text-2xl">
                <span>{user.nickname}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
