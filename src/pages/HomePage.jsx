import Card from "../components/homePage/Card";
import { Col, Row, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookListAsync,
  selectBookList,
  selectIsLoading,
} from "../store/bookListSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const bookList = useSelector(selectBookList);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getBookListAsync());
  }, []);

  return (
    <Spin spinning={loading} style={{ height: "100vh" }}>
      <Row gutter={[0, 16]}>
        {bookList?.length !== 0 &&
          bookList?.map((book) => {
            return (
              <Col
                xl={{
                  span: 4,
                }}
                lg={{
                  span: 6,
                }}
                md={{
                  span: 8,
                }}
                sm={{
                  span: 8,
                }}
                xs={{
                  span: 12,
                }}
                key={book.id}>
                <Card book={book} />
              </Col>
            );
          })}
      </Row>
    </Spin>
  );
}
