import React, { useCallback, useRef } from 'react';

import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface FormProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const authContext = useAuth();
  const { addToast } = useToast();

  const handleOnSubmit = useCallback(
    async (data: FormProps) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Digite seu email.').email('Digite um e-mail válido.'),
          password: Yup.string().required('Digite sua senha'),
        });
        await schema.validate(data, { abortEarly: false });
        await authContext.signIn({ email: data.email, password: data.password });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description: 'Falha ao se autenticar, tente novamente!',
        });
      }
    },
    [authContext, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarber" />
          <Form onSubmit={handleOnSubmit} ref={formRef}>
            <h1>Faça seu logon</h1>
            <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
