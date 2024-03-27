import React from "react";

const Article = ({ article }) => {
  return (
    <article>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-content">{article.content}</p>
      <div className="article-meta">
        <span>Автор: {article.author}</span>
        <span>Дата публикации: {article.datePublished}</span>
      </div>
    </article>
  );
};

export default Article;
