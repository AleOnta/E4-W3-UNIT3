import { Container, Row, Col } from "react-bootstrap";
import ArticleComponent from "./ArticleComponent";
import { useState, useEffect } from "react";
import { IArticle } from "../interfaces/Article";

const HomeComponent = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchingArticles = async () => {
    try {
      let response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        console.log("errore nell'esecuzione della fetch");
      }
    } catch (error: any) {
      console.log("errore fatale nell'esecuzione della fetch");
    }
  };

  useEffect(() => {
    fetchingArticles();
  }, []);
  return (
    <Container className="pt-4">
      <Row className="d-flex justify-content-center ">
        <Col xs={12} md={8} className="text-center">
          <h2>Read some of our Article!</h2>
          <p>Go ahead</p>
        </Col>
        <Col xs={12} md={8}>
          {/* {hasError && <Alert variant="danger">C'è stato un errore nel caricamento: {hasError}</Alert>} */}
          <Row className="d-flex justify-content-center">
            {articles.map((article) => {
              return <ArticleComponent article={article} key={article.id} />;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeComponent;
