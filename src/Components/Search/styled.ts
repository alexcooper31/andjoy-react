import styled, { keyframes } from 'styled-components';

import { blue, green, red } from '../../Helpers/colors';

interface ISearchProps {
  focus: Boolean;
}

interface IConsoleProps {
  console: Number;
}

interface IOverlay {
  show: boolean;
}

const SearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 770px) {
    justify-content: flex-end;
    width: 60%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid lightgray;
  border-right: none;
  box-sizing: border-box;
  outline: none;
  padding: 0 20px;
  border-radius: 25px 0 0 25px;
  transition: border 0.3s;

  &:focus {
    border: 1px solid dodgerblue;
    border-right: none;
  }

  @media screen and (max-width: 770px) {
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: ${(props: ISearchProps) => props.focus ? '1px solid dodgerblue' : '1px solid lightgray'};
  box-sizing: border-box;
  border-left: none;
  border-radius: 0 25px 25px 0;
  border-color: ${(props: ISearchProps) => props.focus ? 'dodgerblue' : 'lightgray'};
  transition: border 0.3s;

  @media screen and (max-width: 770px) {
    height: 40px;
  }

  i {
    padding: 0 10px;
    color: ${(props: ISearchProps) => props.focus ? 'dodgerblue' : 'gray'};
    font-size: 22px;
  }
`;

const SearchResults = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 70px;

  @media screen and (max-width: 770px) {
    max-width: 95%;
  }
`;

const SearchItem = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 2px;
  background-color: white;
  user-select: none;
  cursor: pointer;
  display: flex;
  z-index: 100;

  @media screen and (max-width: 770px) {
    position: relative;
    max-width: 100%;
    padding: 5px;
  }

  &:hover {
    b {
      color: dodgerblue;
    }
  }

  b {
    font-weight: 600;
    font-size: 16px;
    transition: color 0.3s;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: gray;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 3px;
    object-fit: cover;
    object-position: 100% 0;

    @media screen and (max-width: 770px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const SearchInfo = styled.div`
  width: calc(100% - 110px);
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 770px) {
    width: 100%;
    padding-left: 5px;
    align-items: center;
  }
`;

const overlayOpen = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
`;

const overlayClose = keyframes`
  0% {
    opacity: 0.6;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  margin-top: 80px;
  z-index: -1;
  background-color: black;
  opacity: 0.6;
  cursor: pointer;

  @media screen and (max-width: 770px) {
    height: calc(100vh - 60px);
    margin-top: 60px;
  }
`;

const OverlayOpen = styled(Overlay)`
  animation: ${overlayOpen} 0.5s;
  animation-fill-mode: forwards;
`;

const OverlayClose = styled(Overlay)`
  animation: ${overlayClose} 0.5s;
  animation-fill-mode: forwards;
`;

const PlatformWrapper = styled.div`
  display: flex;
`;

const Platform = styled.div`
  user-select: none;
  padding: 3px 8px;
  font-size: 12px;
  margin-right: 3px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  background-color: ${
   (props: IConsoleProps)=> {
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
  SearchWrapper,
  SearchBar,
  SearchIcon,
  SearchResults,
  SearchItem,
  SearchInfo,
  OverlayOpen,
  OverlayClose,
  PlatformWrapper,
  Platform,
}