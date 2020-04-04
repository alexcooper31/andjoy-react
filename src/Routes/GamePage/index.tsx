import React, { useState, useCallback, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  Wrapper,
  Info,
  Cover,
  Buttons,
  ListButton,
  LeftSlide,
  RightSlide
} from './styled';
import Icon from '../../Components/Icon';
import format from '../../Helpers/dateFormat';
import Platforms from './platforms';
import Store from '../../state';

const GamePage = ({ history }: RouteComponentProps) => {
  const [currentGame] = Store('currentGame');

  useEffect(() => {
    if(!currentGame.name) {
      history.push('/');
    }
  }, [currentGame, history])

  const [listSlider, setListSlider] = useState(false);
  const [favSlider, setFavSlider] = useState(false);

  const [inList, setList] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  const listSliderOpen = useCallback(() => {
    setListSlider(true);
  }, [])

  const listSliderClose = useCallback(() => {
    setListSlider(false);
  }, [])

  const favSliderOpen = useCallback(() => {
    setFavSlider(true);
  }, [])

  const favSliderClose = useCallback(() => {
    setFavSlider(false);
  }, [])

  const listHandler = useCallback(() => {
    setList(!inList);
    setListSlider(!listSlider);
  }, [inList, listSlider])

  const favoriteHandler = useCallback(() => {
    setFavorite(!isFavorite);
    setFavSlider(!favSlider);
  }, [favSlider, isFavorite])

  const date = format(currentGame && currentGame.releaseDate);

  return (
    <Wrapper>
      <Cover>
        <img src={currentGame && currentGame.url} alt='cover' />
      </Cover>
      <h1>{currentGame && currentGame.name}</h1>
      <Info>
        <Platforms platforms={currentGame && currentGame.platforms} />
        {
          currentGame && currentGame.releaseDate
          ? <h2>
              {date.month} {date.day}<sup>{date.suffix}</sup>
              <div>{date.year}</div>
            </h2>
          : <h2>TBA</h2>
        }
      
        <Buttons>
          <ListButton
            onClick={listHandler}
            inList={inList}
            onMouseEnter={listSliderOpen}
            onMouseLeave={listSliderClose}
          >
            <Icon>{inList ? 'playlist_add_check' : 'playlist_add'}</Icon>
          </ListButton>
          <LeftSlide visible={listSlider}>
            {inList ? 'Remove Game' : 'Add to my List'}
          </LeftSlide>

          <ListButton
            onClick={favoriteHandler}
            isFavorite={isFavorite}
            onMouseEnter={favSliderOpen}
            onMouseLeave={favSliderClose}
          >
            <Icon>done</Icon>
          </ListButton>
          <RightSlide visible={favSlider}>
            {isFavorite ? 'Unmark Game' : 'Mark as Played'}
          </RightSlide>
        </Buttons>
        
      </Info>
    </Wrapper>
  );
}

export default withRouter(GamePage);
