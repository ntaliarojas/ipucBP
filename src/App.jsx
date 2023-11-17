import { HeaderB } from "./components/HeaderB";
import { ArticleP } from "./components/ArticleP";
import { Footer } from "./components/Footer";
import { Nosotros } from "./components/Nosotros";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <main className="bg-white text-black  ">
      <HeaderB />
      <ArticleP />
      <Nosotros />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
