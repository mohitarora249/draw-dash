import Header from "./_components/header";
import MainContent from "./_components/main-content";

const Home = () => {
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
