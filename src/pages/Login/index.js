import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import { useAuth } from '../../contexts/auth';
import dragonLogin from '../../assets/dragonLogin.png';

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
      <img src={dragonLogin} />
      <form onSubmit={handleLogin}>
        <input placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;