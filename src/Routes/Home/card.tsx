import React, { useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { CardWrapper, GameCard } from './styled';
import format from '../../Helpers/dateFormat';
import Store from '../../state';

interface IGameProps {
  name: string;
  url: string;
  releaseDate: number;
}

interface ICardProps {
  info: IGameProps[];
}

const Card = (props: RouteComponentProps & ICardProps) => {
  const setCurrentGame = Store('currentGame')[1];

  const setGame = useCallback( async (item) => {
    setCurrentGame(item);
    props.history.push(`/game/${item.id}`);
  }, [props.history, setCurrentGame]);

  return (
    <CardWrapper>
      {
        props.info.map((item, index) => 
        {
          const date = format(item.releaseDate)
          return (
            <GameCard onClick={() => setGame(item)} key={index}>
              <img src={item.url} alt='cover' />
              <b>{item.name}</b>
              {
                item.releaseDate
                ? <p>
                    {date.month} {date.day}
                    <sup>{date.suffix}</sup>
                    &nbsp;of {date.year}
                  </p>
                : <p>TBA</p>
              }
            </GameCard>
          )
        }
        )
      }
    </CardWrapper>
  );
}

export default withRouter(Card);
