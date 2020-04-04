import styled from 'styled-components';

interface IHeaderProps {
  visible: boolean;
}

const flexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 5px 5px lightgray;
  position: absolute;
  z-index: 10;  
  transform: ${({visible}: IHeaderProps) => visible ? 'translateY(0)' : 'translateY(-80px)'};
  transition: transform 0.3s;

  @media screen and (max-width: 770px) {
    height: 60px;
  }
`;

const Content = styled.div`
  width: calc(100% - 90px);
  max-width: 1920px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 770px) {
    width: 95%;
  }
`;

const Title = styled.div`
  font-size: 48px;
  color: gray;
  font-weight: 500;
  font-family: 'Righteous', cursive;

  i {
    color: dodgerblue;
    font-style: normal;
  }

  @media screen and (max-width: 770px) {
    font-size: 18px;
  }
`;

const OptionsWrapper = styled(flexCenter)`
  position: relative;
  z-index: 10;

  @media screen and (max-width: 770px) {
    position: absolute;
    top: 75px;
    right: 0;
    transform: ${({visible}: IHeaderProps) => visible ? 'translateY(0)' : 'translateY(-80px)'};
    transition: transform 0.3s;
  }
`;

const OptionsButton = styled(flexCenter)`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  transition: color 0.3s;
  user-select: none;
  font-size: 18px;
  color: ${(props: IHeaderProps) => props.visible ? 'dodgerblue' : 'gray'};

  i {
    font-size: 32px;
    transform: ${(props: IHeaderProps) => props.visible ? 'rotate(180deg)' : 'none'};
    transition: transform 0.5s;
  }

  &:hover {
    color: dodgerblue;
  }
`;

const OptionsContent = styled(flexCenter)`
  position: absolute;
  width: 200px;
  background-color: white;
  border-radius: 10px;
  top: 70px;
  right: 0;
  height: 200px;
  overflow: hidden; 
  flex-direction: column;
  box-shadow: 1px 3px 5px 1px lightgray;
  transform-origin: top;
  transform: ${(props: IHeaderProps) => props.visible ? 'scale(1,1)' : 'scale(1,0)'};
  transition: transform 0.3s;

  @media screen and (max-width: 770px) {
    top: 40px;
    right: 5px;
  }
`;

const Option = styled.div`
  width: calc(100% - 40px);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s, border-bottom-color 0.5s;
  color: gray;
  z-index: 50;
  border-bottom: 1px solid lightgray;

  i {
    font-size: 22px;
  }

  &:nth-child(2) {
    border-top: 1px solid lightgray;
  }

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: dodgerblue;
  }
`;

export {
  Wrapper,
  Content,
  Title,
  OptionsWrapper,
  OptionsButton,
  OptionsContent,
  Option
}