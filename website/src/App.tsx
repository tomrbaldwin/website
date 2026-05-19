import "./App.css";

import ArticleSection from "./components/article-section/ArticleSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SupportSection from "./components/support-section/SupportSection";

function App() {
  return (
    <div className="app-container">
      <Header /> {/* Assumes Header has an inner container for content */}
      <main>
        <div className="main-content">
          <ArticleSection />
          <SupportSection />
        </div>
      </main>
      <Footer /> {/* Assumes Footer has an inner container for content */}
    </div>
  );
}

export default App;
