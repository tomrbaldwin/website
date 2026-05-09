import React from "react";
import "./article-card.css";

interface ArticleCardProps {
  title: string;
  imageUrl: string;
  date: string;
  category: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  imageUrl,
  date,
  category,
  link,
}) => {
  return (
    <a href={link} className="article-card-link">
      <article className="article-card">
        <img src={imageUrl} alt={title} className="article-card-image" />
        <div className="article-card-content">
          <span className="article-card-category">{category}</span>
          <h3 className="article-card-title">{title}</h3>
          <span className="article-card-date">{date}</span>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
