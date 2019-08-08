import React from "react";
import { Layout } from "antd";
import styles from "./style";
import MenuSider from "./MenuSider";
const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={styles.logo} />
        <MenuSider />
      </Sider>
      <Layout>
        <Header style={styles.header}>
          <h1>Header</h1>
        </Header>
        <Content style={styles.content}>
          <div style={styles.contentDiv}>Content</div>
        </Content>
        <Footer style={styles.footer}>
          Ant Design ©2018 Created by Navastud
        </Footer>
      </Layout>
    </Layout>
  );
}
