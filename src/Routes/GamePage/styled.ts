import styled from 'styled-components';

import { blue, green, red } from '../../Helpers/colors';

interface IGameProps {
  isFavorite?: Boolean;
  inList?: Boolean;
  visible?: Boolean;
}

interface IConsoleProps {
  console: Number;
}

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    margin: 20px 0 0;
  }

  @media screen and (max-width: 770px) {
    h1 {
      font-size: 26px;
    }
  }
`;

const Cover = styled.div`
  img {
    border-radius: 5px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h2 {
    margin: 10px 0 20px;
    color: gray;
    font-weight: 500;

    sup {
      font-size: 14px;
    }

    div {
      font-size: 20px;
      margin-top: 5px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  position: relative;
`;

const ListButton = styled.button`
  margin: 0 20px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: ${(props: IGameProps) => props.isFavorite || props.inList ? 'dodgerblue' : 'lightgray'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: background-color 0.5s;

  i {
    font-size: 36px;
    transition: color 0.3s;
    color: white;
  }
`;

const ButtonInfo = styled.div`
  width: ${(props: IGameProps) => props.visible ? '190px' : '0' };
  position: absolute;
  user-select: none;
  top: 0;
  height: 60px;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 25px;
  color: white;
  overflow: hidden;
  background-color: dodgerblue;
  transition: width 0.5s;
  white-space: nowrap;
  z-index: 1;

  &:after {
    position: absolute;
    background-color: white;
    content: '';
    width: 50px;
    height: 63px;
  }

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const LeftSlide = styled(ButtonInfo)`
  padding-left: ${(props: IGameProps) => props.visible ? '20px' : '0' };
  right: 135px;

  &:after {
    right: 0;
    border-radius: 50% 0 0 50%;
  }
`;

const RightSlide = styled(ButtonInfo)`
  justify-content: flex-end;
  padding-right: ${(props: IGameProps) => props.visible ? '20px' : '0' };
  left: 135px;

  &:after {
    left: 0;
    border-radius: 0 50% 50% 0;
  }
`;

const PlatformWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

const Platform = styled.div`
  user-select: none;
  padding: 5px 10px;
  font-size: 14px;
  margin: 0 5px;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  background-color: ${
    (props: IConsoleProps) => {
      switch(props.console) {
        case 48: {
          return blue
        }
        case 49: {
          return green
        }
        case 130: {
          return red
        }
        default: {
          return 'black'
        }
      }
    }
  };
`;

export {
  Wrapper,
  Cover,
  Info,
  Buttons,
  ListButton,
  LeftSlide,
  RightSlide,
  PlatformWrapper,
  Platform
};
