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
        setError(true)
      }
    },
    [email, password, signIn],
  );

  return (
    <Container>
      <form onSubmit={handleLogin}>
      <img className="login__logo" src={dragonLogin} />
        <input placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)}/>
        {error &&( <p> erro </p>)}
        <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}></input>
        {error && (<p> erro </p>)}
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}

export default Login;