import React, { ReactNode } from 'react';

import { Container } from './styled';
import { ILayoutProps } from './types';

const Layout = ({ children }: ILayoutProps) => (
  <Container>
    {children}
  </Container>
);

export default Layout;
