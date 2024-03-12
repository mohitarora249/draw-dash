import Header from "./_components/header";
import MainContent from "./_components/main-content";

const Home = () => {
  return (
    <main className="h-screen w-screen mx-auto max-w-screen-xl px-4 flex flex-col">
      <Header />
      <MainContent />
    </main>
  );
};

export default Home;
