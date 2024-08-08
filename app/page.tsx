// import { fetchUserList } from "@/api/fetchUserList";
// import Link from "next/link";

export default async function Home() {
  // const userList = await fetchUserList();

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex w-full flex-col items-center border-black bg-white text-mainColor">
        <span className="p-4 text-4xl">Funnection</span>
        <div className="flex h-full flex-col flex-wrap justify-center gap-4 text-2xl">
          {/* {userList.map((user) => (
            <div key={user.id} className="border-2 border-black p-4">
              <Link href={user.generateString}>
                {user.id} {user.nickname}
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </main>
  );
}
