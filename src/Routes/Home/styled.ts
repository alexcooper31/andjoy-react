import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    color: dodgerblue;
  }

  @media screen and (max-width: 770px) {
    width: 90%;
  }
`;

const CardWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 770px) {
    overflow-x: scroll;
  }
`;

const GameCard = styled.div`
  width: 220px;
  height: 320px;
  border: 1px solid lightgray;
  margin-right: 20px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 5px 1px lightgray;
  }

  b {
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    padding: 10px;
    font-weight: 600;
    text-overflow: ellipsis;
  }

  p {
    text-indent: 10px;
    color: gray;
    margin: 0;
    padding: 0 0 10px 0;
  }

  img {
    width: 220px;
    height: 260px;
  }

  @media screen and (max-width: 770px) {
    width: 120px;
    height: 180px;
    margin-right: 10px;
    text-indent: 5px;

    b {
      font-size: 12px;
      padding: 5px 0;
    }

    p {
      font-size: 10px;
      padding: 0;
      text-indent: 5px;
    }

    img {
      width: 120px;
      height: 140px;
    }
  }
`;

export {
  Wrapper,
  CardWrapper,
  GameCard
};
