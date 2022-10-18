import React from 'react';
import { Layout as AntDLayout } from 'antd';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {
  return(
    <AntDLayout>
      {children}
    </AntDLayout>
  );
};

export default Layout;