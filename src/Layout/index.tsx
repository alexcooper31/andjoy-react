import React from 'react';

import Header from './Header';
import { Container, Content } from './styled';

const Layout: React.FunctionComponent<any> = (props) => {
  return (
    <Container>
      <Header />
      <Content>
        {props.children}
      </Content>
    </Container>
  )
}

export default React.memo(Layout);