import React, { ReactNode } from 'react';

import { Container } from './styled';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => (
  <Container>
    {children}
  </Container>
);

export default Layout;
