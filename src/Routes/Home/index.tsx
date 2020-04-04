import React from 'react';

import { Wrapper } from './styled';
import Card from './card';

const test = [
  {
  name: 'La-Mulana 2',
  releaseDate: 1585872000,
  url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w37.jpg'
  },
  {
  name: 'Final Fantasy VII Remake',
  releaseDate: 1585612800,
  url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qxr.jpg'
  },
  {
    name: 'The Last of Us: Part II',
    releaseDate: 1590710400,
    url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r0o.jpg'
  },

]

const Home = () => {
  return (
    <Wrapper>
      <h2>Upcoming Games</h2>
      <Card info={test} />
    </Wrapper>
  );
}

export default Home;
