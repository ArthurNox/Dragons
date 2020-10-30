import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiLogout } from "react-icons/hi";

import { Container } from './styles';
import { useAuth } from '../../contexts/auth';

function Header({title, buttonBack}) {
  const { signOut } = useAuth();


  return <Container>
    <div className="logo-header">
        <p>
          {buttonBack ? (
            <Link to="/home" className="Back">
              <HiHome data-tip="Home" aria-label="Voltar para Home"  size={50}/>
            </Link>
          ) : (
            <>
               
            </>
          )}
        </p>
      </div>
      <div className="page-name">
          <p>{title}</p>
      </div>
      <div className="nav-header">
        <HiLogout data-tip="Logout" aria-label="Logout" className="logout" onClick={() => signOut()} size={50}/>
      </div>
      




  </Container>;
}

export default Header;