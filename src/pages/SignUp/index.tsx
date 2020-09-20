import React from 'react';

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Container, Background, Content } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input name="nome" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button>Cadastrar</Button>
        </form>
        <a href="create">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
