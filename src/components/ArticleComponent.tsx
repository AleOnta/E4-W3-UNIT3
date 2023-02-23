import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IArticle } from "../interfaces/Article";

interface ArticleComponentProps {
  article: IArticle;
}

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Col xs={4}>
      <Card className="myArticle">
        <Card.Img variant="top" src={article.imageUrl} className="card-img" />
        <Card.Body>
          <Card.Title className="card-text title">{article.title}</Card.Title>
          <Card.Text className="card-text summary">{article.summary}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center update">
          <small className="text-muted">Last update: {article.updatedAt.toString().slice(0, 10)}</small>
          <Link to={"/article/" + article.id} className="btn btn-secondary">
            Read More
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default ArticleComponent;
