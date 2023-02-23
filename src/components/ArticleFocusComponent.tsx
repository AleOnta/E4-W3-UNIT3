import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IArticle } from "../interfaces/Article";

const ArticleFocusComponent = () => {
  const [article, setArticle] = useState<IArticle>();
  const [hasError, setHasError] = useState("");
  const params = useParams();
  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchingArticles = async () => {
    try {
      let response = await fetch(`${endpoint}/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      } else {
        setHasError("C'è stato un errore nella response della fetch in ArticleFocus");
      }
    } catch (error: any) {
      setHasError("Errore fatale nella fetch nell'ArticleFocus, ERROR: " + error.message);
    }
  };

  useEffect(() => {
    fetchingArticles();
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center pt-5">
        <Col xs={12} md={8}>
          {hasError.length > 0 ? (
            <Alert variant="danger">{hasError}</Alert>
          ) : (
            <Card className="focusArticle p-4">
              <Card.Img variant="top" src={article?.imageUrl} />
              <Card.Title className="p-2 m-3  focusTitle">{article?.title}</Card.Title>
              <Card.Body>
                <Card.Text>{article?.summary}</Card.Text>
              </Card.Body>
              <ul className="pt-3">
                <li>Published at: {article?.publishedAt.toString().slice(0, 10)}</li>
                <li>Updated at: {article?.updatedAt.toString().slice(0, 10)}</li>
                <li>
                  Credits to:
                  {
                    <a href={article?.url} target={"_blank"}>
                      {article?.newsSite}
                    </a>
                  }
                </li>
              </ul>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default ArticleFocusComponent;
