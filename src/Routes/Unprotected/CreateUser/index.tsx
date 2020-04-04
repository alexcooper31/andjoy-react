import React, { useCallback, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Container, Content, Title, Form, Input, Submit, Error } from './styled';
import validate from '../../../Helpers/validation';

const CreateUser = ({ history }: RouteComponentProps) => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const [passwordError, setPassError] = useState(false);
  const [passwordDiffer, setPassDiffer] = useState(false);

  const focus = useCallback(() => {
    setEmailError(false);
    setPassError(false);
    setPassDiffer(false);
  }, [])

  const submit = useCallback(() => {
    if (!validate(email)) {
      setEmailError(true);
      return;
    }
    if (password === '') {
      setPassError(true);
      return;
    }
    if (password !== passwordRe) {
      setPassDiffer(true);
      return;
    }

    history.push('/')
    
  }, [email, history, password, passwordRe])

  return (
    <Container>
      <Content>
        <Title>
          AND<b>JOY</b>
        </Title>

        <Form>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder='Type an Email'
            onFocus={focus}
            error={emailError}
          />
          <Error>{ emailError ? 'The email must be valid' : '' }</Error>

          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder='Type a Password'
            type='password'
            onFocus={focus}
            error={passwordError}
          />
          <Error>{ passwordError ? 'Please enter a password' : '' }</Error>

          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordRe(e.target.value)}
            placeholder='Repeat the Password'
            type='password'
            onFocus={focus}
            error={passwordDiffer}
          />
          <Error>{ passwordDiffer ? 'The passwords must match' : '' }</Error>

          <Submit onClick={submit}>Confirm!</Submit>
        </Form>
      </Content>
    </Container>
  )
}

export default withRouter(CreateUser);