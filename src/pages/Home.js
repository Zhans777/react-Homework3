import React, { useState, useEffect } from "react";
import Articles from "../components/Articles";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    fetch("https://alphaedu.portfolio-adilzhexenov.kz/news")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <Articles articles={articles} />
    </main>
  );
};

export default Home;

