import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleOnSubmit = useCallback(
    async (data: FormProps) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().min(3, 'Pelo menos 3 letras.'),
          email: Yup.string().required('Digite um e-mail.').email('Digite um e-mail válido.'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos.'),
        });
        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);
        history.push('/');
        addToast({
          title: 'Usuário criado',
          type: 'success',
          description: 'Você já pode realizar seu logon',
        });
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
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarber" />
          <Form
            ref={formRef}
            // initialData={{ name: 'Fábio dos Santos' }}
            onSubmit={handleOnSubmit}
          >
            <h1>Faça seu cadastro</h1>
            <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
            <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
