import ArticleCard from "../article-card/ArticleCard";
import "./article-section.css";
import SectionHeading from "../section-heading/SectionHeading";
import anzacImage from "../../assets/anzac-image.avif";

const articles = [
  {
    title: "ANZAC WAR CRIMES AND THE NATIONALIST CONSCIOUSNESS",
    imageUrl: anzacImage,
    date: "25 APRIL, 2026",
    category: "Web Development",
    link: "/articles/responsive-portfolio",
  },
  {
    title: "Sustainable Web Design Principles",
    imageUrl:
      "https://via.placeholder.com/400x200/008000/FFFFFF?text=Sustainability",
    date: "20 APRIL, 2026",
    category: "Sustainability",
    link: "/articles/sustainable-web-design",
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
