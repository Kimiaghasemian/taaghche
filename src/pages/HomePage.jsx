import React from "react";
import Card from "../components/homePage/Card";
import { Col, Row } from "antd";
import styles from "../styles/Home.module.scss";

export default function HomePage() {
  return (
    <div>
      <Row>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
        <Col
          lg={{
            span: 4,
          }}>
          <Card />
        </Col>
      </Row>
    </div>
  );
}
