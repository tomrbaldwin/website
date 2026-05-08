import "./App.css";

import ArticleSection from "./components/article-section/ArticleSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SupportSection from "./components/support-section/SupportSection";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ArticleSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
