import ArticleCard from "../article-card/ArticleCard";
import "./article-section.css";
import SectionHeading from "../section-heading/SectionHeading";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "AUSTRALIAN CLIMATE POLICY",
    date: "5 JUNE, 2026",
    category: "EARTH DAY 2026",
    link: "#/articles/climate",
  },
  {
    title: "AUSTRALIA'S NATIONALIST CONSCIOUSNESS AND THE ANZAC",
    date: "25 APRIL, 2026",
    category: "ANZAC DAY 2026",
    link: "#/pages/anzac",
  },
];

const ArticleSection = () => {
  return (
    <section className="article-section">
      <SectionHeading title="BLOG" />
      <div className="article-grid">
        {articles.map((article, index) => (
          <Link
            to={article.link.substring(1)}
            key={index}
            className="article-link"
          >
            <ArticleCard {...article} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
