import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import { useAuth } from '../../contexts/auth';

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('admin@admin.com.br');
  const [password, setPassword] = useState('');


  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      console.log('->',email,  password)
      signIn(email, password);
    },
    [email, password, signIn],
  );

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="text" onChange={e => setEmail(e.target.value)}/>
        <label>Senha</label>
        <input type="password" onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;