import Header from "./_components/header";
import MainContent from "./_components/main-content";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  if (isAuth) redirect("/dashboard");

  return (
    <main className="h-screen w-screen mx-auto max-w-screen-xl px-4 flex flex-col">
      <Header />
      <div className="flex-1 h-full">
        <MainContent />
      </div>
    </main>
  );
};

export default Home;
