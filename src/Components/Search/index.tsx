import React, { useState, useCallback, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Icon from '../Icon';
import Platforms from './platforms';
import format from '../../Helpers/dateFormat';
import {
  SearchWrapper,
  SearchBar,
  SearchIcon,
  SearchResults,
  SearchItem,
  SearchInfo,
  OverlayOpen,
  OverlayClose,
} from './styled';
import Fetch from '../../Services';
import Store, { defaultResults } from '../../state';
import Loader from '../Loader';

const Search = ({ history }: RouteComponentProps) => {

  const setCurrentGame = Store('currentGame')[1];
  const [results, setResults] = Store('results');
  const [loading, setLoading] = Store('searchLoading');
  const [focus, setFocus] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    let timer = setTimeout(async () => {
      if(term !== '') {
        setLoading(true);
        const fetch = await Fetch.search(term);
        setResults(fetch.search);
        if (term === '') setResults([defaultResults]);
        setLoading(false);
      } 
    }, 1000)

    return () => {
      clearTimeout(timer);
    }
  }, [setLoading, setResults, term])

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(false);
    setResults([defaultResults]);
    setTerm(e.target.value);
  }, [setLoading, setResults]);

  const cleanSearch = useCallback(() => {
    setResults([defaultResults]);
    setTerm('');
  }, [setResults])

  const setGame = useCallback((item) => {
    setTerm('');
    setCurrentGame(item);
    setResults([defaultResults]);
    history.push(`/game/${item.id}`);
  }, [history, setCurrentGame, setResults]);

  const searchFocus = useCallback(() => {
    setFocus(true)
  }, []);

  const searchBlur = useCallback(() => {
    setFocus(false)
  }, []);

  return (
    <SearchWrapper>
      <SearchBar
        value={term}
        onChange={handleSearch}
        onFocus={searchFocus}
        onBlur={searchBlur}
        placeholder='Search for a game'
      />
      <SearchIcon focus={focus}>
        <Icon>search</Icon>
      </SearchIcon>
      <SearchResults>
        { term !== '' ? <OverlayOpen onClick={cleanSearch} /> : <OverlayClose /> }
        { loading && <Loader margin={80} /> }
        {
          results[0] && results[0].id !== 0 && term !== '' && results.map((item, index) => {
            const date = format(item.releaseDate)
            return (
              <SearchItem key={index} onClick={() => setGame(item)}>
                <img src={item.url} alt={item.name} />
                <SearchInfo>
                  <b>{ item.name }</b>
                  {
                    item.releaseDate
                    ? <p>
                        {date.month} {date.day}
                        <sup>{date.suffix}</sup>
                        &nbsp;of {date.year}
                      </p>
                    : <p>TBA</p>
                  }
                  <Platforms platforms={item.platforms} />
                </SearchInfo>
              </SearchItem>
            )
          }
          )
        }
      </SearchResults>
    </SearchWrapper>
  )
}

export default withRouter(Search);