import ArticleCard from "../article-card/ArticleCard";
import "./article-section.css";
import SectionHeading from "../section-heading/SectionHeading";
import anzacImage from "../../assets/anzac-image.avif";
import climateImg from "../../assets/climateimg.webp";
import lemkin from "../../assets/lemkin.webp";

const articles = [
  {
    title: "ANZAC WAR CRIMES AND THE NATIONAL CONSCIOUSNESS",
    imageUrl: anzacImage,
    date: "25 APRIL, 2026",
    category: "ANZAC DAY 2026",
    link: "/articles/responsive-portfolio",
    alt: "Anzac soldiers marching",
  },
  {
    title: "THE DECLINE OF DEMOCRACY",
    imageUrl: climateImg,
    date: "20 APRIL, 2026",
    category: "HUMAN RIGHTS",
    link: "/articles/sustainable-web-design",
    alt: "bush fire in Australia",
  },
  {
    title: "A HISTORY OF GENOCIDE",
    imageUrl: lemkin,
    date: "20 APRIL, 2026",
    category: "HUMAN RIGHTS",
    link: "/articles/sustainable-web-design",
    alt: "Raphael Lemkin",
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
