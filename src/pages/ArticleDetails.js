import { useEffect, useState, useParams } from "react";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
 
    fetch(`https://alphaedu.portfolio-adilzhexenov.kz/news/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!article) {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export default ArticleDetails;