import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="main">
      <div className="main-border-top"></div>
      <Header />
      <Portfolio />
      <div className="main-border-bottom"></div>
    </main>
  );
}
