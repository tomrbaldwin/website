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
          <h3 className="article-card-title">{title}</h3>
          <div className="article-card-meta">
            <span className="article-card-date">{date}</span>
            <span className="article-card-category">{category}</span>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
