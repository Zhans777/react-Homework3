import { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   
    fetch("https://alphaedu.portfolio-adilzhexenov.kz/news")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {articles.map(({ _id, title }) => (
        <li key={_id}>
          <a href={`/article/${_id}`}>{title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Articles;