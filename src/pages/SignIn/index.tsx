import React, { useCallback, useRef } from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Background, Content } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErrors';

interface FormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleOnSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Digite seu email.').email('Digite um e-mail válido.'),
        password: Yup.string().required('Digite sua senha'),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErros(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form onSubmit={handleOnSubmit} ref={formRef}>
          <h1>Faça seu logon</h1>
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
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
