import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import ArticleSection from "./components/article-section/ArticleSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SupportSection from "./components/support-section/SupportSection";
import Climate from "./pages/climate";

const HomePage = () => (
  <>
    <ArticleSection />
    <SupportSection />
  </>
);

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles/climate" element={<Climate />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
