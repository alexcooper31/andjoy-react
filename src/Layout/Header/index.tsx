import React, { useState, useCallback } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Icon from '../../Components/Icon';
import Link from '../../Helpers/link';
import Search from '../../Components/Search';
import {
  Wrapper,
  OptionsWrapper,
  OptionsButton,
  OptionsContent,
  Option,
  Title,
  Content
} from './styled';
import { removeUserToken } from '../../Helpers/userToken';

const Header = ({ location }: RouteComponentProps) => {
  const [options, setOptions] = useState(false);

  const optionsFocus = useCallback(
    () => {
      setOptions(!options)
    }, [options]
  );

  const optionsBlur = useCallback(
    () => {
      setOptions(false)
    }, []
  );

  const logOut = useCallback(() => {
    removeUserToken();
    window.location.reload();
    }, []
  )

  const routeCheck = location.pathname !== '/login' && location.pathname !== '/new-user'

  return (
    <Wrapper visible={routeCheck}>
      <Content>
        <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
          <Title>
            AND<i>JOY</i>
          </Title>
        </Link>

        <Search />

        <OptionsWrapper visible={routeCheck}>
          <OptionsButton visible={options} tabIndex={0} onClick={optionsFocus} onBlur={optionsBlur}>
            Options <Icon>arrow_drop_down</Icon>
          </OptionsButton>

          <OptionsContent visible={options}>
            <Link to='/wish-list' style={{width: '100%'}}>
              <Option>
                Wish List
                <Icon>list</Icon>
              </Option>
            </Link>

            <Option>
              Played List
              <Icon>done</Icon>
            </Option>

            <Option>
              Settings
              <Icon>settings</Icon>
            </Option>

            <Option onClick={logOut}>
              Log Out
              <Icon>power_settings_new</Icon>
            </Option>
          </OptionsContent>
        </OptionsWrapper>
      </Content>
    </Wrapper>
  )
}

export default withRouter(Header);