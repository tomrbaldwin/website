import ArticleCard from "../article-card/ArticleCard";
import "./article-section.css";
import SectionHeading from "../section-heading/SectionHeading";

const articles = [
  {
    title: "THE SIXTH EXTINCTION",
    date: "30 MAY, 2026",
    category: "HUMAN RIGHTS",
    link: "/articles/sustainable-web-design",
  },
  {
    title: "NATIONALIST CONSCIOUSNESS AND THE ANZAC",
    date: "25 APRIL, 2026",
    category: "ANZAC DAY 2026",
    link: "/articles/responsive-portfolio",
  },
];

const ArticleSection = () => {
  return (
    <section className="article-section">
      <SectionHeading title="BLOG" />
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
