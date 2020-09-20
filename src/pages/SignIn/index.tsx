import React from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Container, Background, Content } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button>Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
