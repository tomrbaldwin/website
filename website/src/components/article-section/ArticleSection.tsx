import ArticleCard from "../article-card/ArticleCard";
import "./article-section.css";
import SectionHeading from "../section-heading/SectionHeading";
import anzacImage from "../../assets/anzac-image.avif";
import climateImg from "../../assets/climateimg.webp";
import lemkin from "../../assets/lemkin.webp";

const articles = [
  {
    title: "ANZAC WAR CRIMES AND THE NATIONALIST CONSCIOUSNESS",
    imageUrl: anzacImage,
    date: "25 APRIL, 2026",
    category: "ANZAC DAY 2026",
    link: "/articles/responsive-portfolio",
  },
  {
    title: "AUSTRALIA CAN EASILY FULFILL ITS CLIMATE RESPONSIBILITIES",
    imageUrl: climateImg,
    date: "20 APRIL, 2026",
    category: "CLIMATE",
    link: "/articles/sustainable-web-design",
  },
  {
    title: "A HISTORY OF GENOCIDE",
    imageUrl: lemkin,
    date: "20 APRIL, 2026",
    category: "HUMAN RIGHTS",
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
