import React, { useCallback, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  Container,
  Content,
  Title,
  Form,
  Input,
  Submit,
  SignUp,
  Error
} from './styled';
import Link from '../../../Helpers/link';
import validate from '../../../Helpers/validation';

const Login = ({ history }: RouteComponentProps) => {

  const [email, setEmail] = useState('');
  const [emailError, setError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const focus = useCallback(() => {
    setError(false);
    setPasswordError(false);
  }, [])

  const submit = useCallback(() => {
    if(!validate(email)) {
      setError(true);
      return;
    }
    if(password === '') {
      setPasswordError(true);
      return;
    }
    history.push('/')

  }, [email, history, password])

  return (
    <Container>
      <Content>
        <Title>
          AND<b>JOY</b>
        </Title>

        <Form>
          <Input
            error={emailError}
            placeholder='Email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            onFocus={focus}
          />
          <Error>{ emailError ? 'The entered email must be valid' : '' }</Error>

          <Input
            error={passwordError}
            placeholder='Password'
            type='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            onFocus={focus} 
          />
          <Error>{ passwordError ? 'Please type a password' : '' }</Error>

          <Submit onClick={submit}>Log In</Submit>
          <Link to='/new-user' style={{width: '35%'}}>
            <SignUp>Sign Up</SignUp>
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default withRouter(Login);