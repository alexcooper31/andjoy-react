import React from 'react';

import {
  PlatformWrapper,
  Platform
} from './styled';
import consoles from '../../Helpers/consoles';

interface ISearchProps {
  platforms: String[];
}

const Platforms: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <PlatformWrapper>
      {
        props.platforms.map((item, index) => {
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
