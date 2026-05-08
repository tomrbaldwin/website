import ArticleCard from "../article-card/ArticleCard";
import "./ArticleSection.css";
import SectionHeading from "../section-heading/SectionHeading";

const articles = [
  {
    title: "Building a Responsive Portfolio with React and Vite",
    imageUrl:
      "https://via.placeholder.com/400x200/0000FF/FFFFFF?text=React+Vite",
    date: "May 7, 2026",
    category: "Web Development",
    link: "/articles/responsive-portfolio",
  },
  {
    title: "Sustainable Web Design Principles",
    imageUrl:
      "https://via.placeholder.com/400x200/008000/FFFFFF?text=Sustainability",
    date: "April 20, 2026",
    category: "Sustainability",
    link: "/articles/sustainable-web-design",
  },
];

const ArticleSection = () => {
  return (
    <section className="article-section">
      <SectionHeading title="Latest Articles" />
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
