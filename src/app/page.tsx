import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Tabs from "@/components/Tabs/Tabs";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Tabs />
      <Portfolio />
    </main>
  );
}
