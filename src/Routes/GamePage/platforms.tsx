import React from 'react';


import consoles from '../../Helpers/consoles';
import { PlatformWrapper, Platform } from './styled';

interface IGamePageProps {
  platforms: String[];
}

const Platforms = (props: IGamePageProps) => {
  return (
    <PlatformWrapper>
      {
        props.platforms && props.platforms.map((item, index) => {
          const console = consoles(Number(item));
        
          if(console !== 'OTHERS') {
            return (
              <Platform console={Number(item)} key={index}>
                { console }
              </Platform>
            );
          }
          return '';
        })
      }
    </PlatformWrapper>
  );
}

export default React.memo(Platforms);
