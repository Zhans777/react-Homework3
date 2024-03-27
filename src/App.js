import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./components/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import "./style.css";

const App = () => {
 
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    fetch("https://alphaedu.portfolio-adilzhexenov.kz/news")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;