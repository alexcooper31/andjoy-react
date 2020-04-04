import styled from 'styled-components';

import { blue, gray1, red } from '../../../Helpers/colors';

interface IInputProps {
  error: boolean;
}

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 100px);
  font-family: 'Montserrat', sans-serif;
  background-color: ${gray1};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 72px;
  color: gray;
  font-weight: 400;
  padding: 30px 0;
  user-select: none;
  font-family: 'Righteous', cursive;

  b {
    font-weight: normal;
    color: dodgerblue;
  }

  @media screen and (max-width: 770px) {
    font-size: 42px;
  }
`;

const Form = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 770px) {
    width: 300px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  border: ${(props: IInputProps) => props.error ? '2px solid' + red : '2px solid lightgray'};
  margin-top: 20px;
  box-sizing: border-box;
  outline: none;
  padding: 15px;
  font-size: 18px;
  transition: border 0.3s;

  &:focus {
    border: 2px solid dodgerblue;
  }

  @media screen and (max-width: 770px) {
    font-size: 16px;
  }
`;

const Submit = styled.button`
  margin-top: 20px;
  outline: none;
  padding: 15px 0;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  border: none;
  color: white;
  border-radius: 5px;
  background-color: dodgerblue;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${blue};
  }

  @media screen and (max-width: 770px) {
    padding: 10px;
  }
`;

const Error = styled.div`
  width: 100%;
  text-align: right;
  color: ${red};
  font-size: 14px;
  margin-top: 3px;
`;

export {
  Container,
  Content,
  Title,
  Form,
  Input,
  Submit,
  Error
}