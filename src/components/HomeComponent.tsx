import { Container, Row, Col, Alert } from "react-bootstrap";
import ArticleComponent from "./ArticleComponent";
import { useState, useEffect } from "react";
import { IArticle } from "../interfaces/Article";

const HomeComponent = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [hasError, setHasError] = useState("");
  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchingArticles = async () => {
    try {
      let response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setArticles(data);
      } else {
        setHasError("C'è stato un errore nella response della fetch in HomePage");
      }
    } catch (error: any) {
      setHasError("Errore fatale nella fetch della Hompage, ERROR: " + error.message);
    }
  };

  useEffect(() => {
    fetchingArticles();
  }, []);
  return (
    <Container className="pt-4">
      <Row className="d-flex justify-content-center ">
        {hasError.length > 0 ? (
          <Alert variant="danger" className="mt-5 pt-5">
            {hasError}
          </Alert>
        ) : (
          <>
            <Col xs={12} md={8} className="text-center">
              <h2>Read some of our Article!</h2>
              <p>Go ahead</p>
            </Col>
            <Col xs={12} md={8}>
              <Row className="d-flex justify-content-center">
                {articles.map((article) => {
                  return <ArticleComponent article={article} key={article.id} />;
                })}
              </Row>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
export default HomeComponent;
