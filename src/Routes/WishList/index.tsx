import React, { useState, useCallback } from 'react';

import { Table, Row, HeaderCell, Cell, Navigation, NavButton } from './styled';
import Icon from '../../Components/Icon';
import format from '../../Helpers/dateFormat';

const WishList = () => {
  const [favorite, setFavorite] = useState(false);

  const favoriteHandle = useCallback(() => {
    if(favorite) {
      if (window.confirm('Unmark this game as a favorite?')) {
        setFavorite(false);
        return;
      }
    }
    if (window.confirm('Mark this game as a favorite?')) {
      setFavorite(true);
      return;
    }
  }, [favorite])

  const date = format(1374105600);

  return (
    <Table>
      <h2>Wish List</h2>
      <Row>
        <HeaderCell>Game Name</HeaderCell>
        <HeaderCell>Release Date</HeaderCell>
        <HeaderCell>Favorite</HeaderCell>
      </Row>
      <Row>
        <Cell>
          Persona 5 Scramble: The Phantom Strikers
        </Cell>
        <Cell>{ `${date.month} ${date.day}${date.suffix} of ${date.year}` }</Cell>
        <Cell favorite={favorite} onClick={favoriteHandle}>
          <Icon>{favorite ? 'star' : 'star_border'}</Icon>
        </Cell>
      </Row>
      <Row>
        <Cell>Kunai</Cell>
        <Cell>{ `${date.month} ${date.day}${date.suffix} of ${date.year}` }</Cell>
        <Cell favorite={true}><Icon>star</Icon></Cell>
      </Row>

      <Navigation>
        Showing 5 of <b> 5</b>
        <NavButton disabled><Icon>chevron_left</Icon></NavButton>
        <NavButton><Icon>chevron_right</Icon></NavButton>
      </Navigation>
    </Table>
  );
}

export default WishList;
