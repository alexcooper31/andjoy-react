import styled from 'styled-components';

interface IListProps {
  disabled?: boolean;
  favorite?: boolean;
}

const Table = styled.div`
  width: 80%;
  margin-top: 40px;
  background-color: white;
  border-radius: 5px;
  padding-top: 20px;
  box-shadow: 0 2px 5px 1px lightgray;

  h2 {
    padding-left: 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 770px) {
    width: 95%;

    h2 {
      padding-left: 15px;
      margin: 5px 0;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid lightgray;
  color: gray;
`;

const HeaderCell = styled.div`
  width: calc(40% - 40px);
  padding: 20px;
  font-weight: 600;

  &:last-child {
    width: 20%;
    padding: 20px 0;
    text-align: center;
  }

  @media screen and (max-width: 770px) {
    font-size: 15px;
    padding: 20px 15px;
  }
`;

const Cell = styled.div`
  width: calc(40% - 40px);
  padding: 15px 20px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  i {
    cursor: pointer;
    font-size: 22px;
    color: ${(props: IListProps) => props.favorite ? 'goldenrod' : 'gray'};
  }

  &:first-child {
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: dodgerblue;
    }
  }

  &:last-child {
    width: 20%;
    padding: 10px 0;
    text-align: center;
  }

  @media screen and (max-width: 770px) {
    padding: 15px;
    font-size: 14px;
  }
`;

const Navigation = styled.div`
  width: calc(100% - 10px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10px 20px 0;

  b {
    margin: 0 10px;
  }

  @media screen and (max-width: 770px) {
    font-size: 14px;
    padding: 10px 0;
  }
`;

const NavButton = styled.button`
  border: none;
  outline: none;
  color: ${(props: IListProps) => props.disabled ? 'lightgray' : 'black'};
  cursor: ${(props: IListProps) => props.disabled ? 'initial' : 'pointer'};
  background-color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props: IListProps) => props.disabled ? 'white' : 'lightgray'};
  }
`;

export {
  Table,
  Row,
  HeaderCell,
  Cell,
  Navigation,
  NavButton
}