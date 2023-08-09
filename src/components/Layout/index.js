import React from "react";
import { Layout } from "antd";
import LayoutFooter from "./footer/footer";
import LayoutHeader from "./header/header";
import { Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;

export default function PageLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ height: "100px", padding: "16" }}>
        <LayoutHeader />
      </Header>
      <Content style={{ paddingTop: "20px" }}>
        <Outlet />
      </Content>
      <Footer>
        <LayoutFooter />
      </Footer>
    </Layout>
  );
}
