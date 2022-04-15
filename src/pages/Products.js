import React from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Row, Card, Col } from "react-bootstrap";
import { fetchProduct } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import LoadingSpin from "react-loading-spin";
const Products = () => {
  const dispatch = useDispatch();
  // const [product, setProducts] = React.useState([]);

  const { data: product, status } = useSelector((state) => {
    return state.product;
  });
  React.useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <LoadingSpin />
      </div>
    );
  }
  if (status === STATUSES.ERROR) {
    return <h1>Something went wrong.... </h1>;
  }
  return (
    <div className="container">
      <Row xs={1} md={4} className="g-4">
        {product.map((item) => {
          return (
            <Col
              key={item.id}
              className="d-flex align-item-stretch justify-content-center"
            >
              <Card className="shadow w-75">
                <div>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "100px", width: "100px", padding: "5px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                  <Card.Text>
                    <b>$ {item.price}</b>
                  </Card.Text>

                  <button
                    onClick={() => {
                      dispatch(add(item));
                    }}
                    className="btn btn-info"
                  >
                    Add to cart
                  </button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Products;
