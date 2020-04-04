import * as React from 'react';
import styled from 'styled-components';

interface ILoader {
  margin?: number;
}

const Main = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 96px;
    height: 96px;
    margin-top: ${(props: ILoader) => props.margin ? `${props.margin}px` : '100px'};
    border-radius: 50%;
    border: 12px solid dodgerblue;
    border-color: dodgerblue transparent dodgerblue transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = (props: ILoader) => (
  <Main margin={props.margin} />
);

export default Loader;
