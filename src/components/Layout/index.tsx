import React from "react";
import { Layout as AntDLayout } from "antd";
const { Header, Footer, Content } = AntDLayout;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AntDLayout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </AntDLayout>
  );
};

export default Layout;
