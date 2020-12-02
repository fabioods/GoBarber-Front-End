import React from 'react';
import { FiPower } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/Auth';
import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="Logotipo" />
          <Profile>
            <img src={user.avatar_url} alt="Avatar" />
            <div>
              <span>Bem vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
