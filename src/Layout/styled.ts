import styled from 'styled-components';

import { gray1 } from '../Helpers/colors';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: ${gray1};
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

const Content = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
`;

export {
  Container,
  Content
}