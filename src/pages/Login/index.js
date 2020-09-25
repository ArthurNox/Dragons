import React, { useState, useCallback } from 'react';

import { Container } from './styles';
import { useAuth } from '../../contexts/auth';
import dragonLogin from '../../assets/dragonLogin.png';

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('admin@admin.com.br');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      setError(false)

      const result = signIn(email, password);

      if(!result.error) {
        console.log('res', result)
        setError(true)
      }
    },
    [email, password, signIn],
  );

  return (
    <Container>
      <form onSubmit={handleLogin} className={error ? "fail" : ''}>
      <img alt={'Dragon'} className="login__logo" src={dragonLogin} />
      <h1>Dragões</h1>
        <input placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)}/>
        <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;