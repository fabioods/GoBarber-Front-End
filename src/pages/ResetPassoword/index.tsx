import React, { useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Background, Content, AnimationContainer } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErros from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';

interface FormProps {
  password: string;
  password_confirmation: string;
}

const ResetPassoword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const location = useLocation();

  const handleOnSubmit = useCallback(
    async (data: FormProps) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Digite sua senha'),
          password_confirmation: Yup.string().oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta'),
        });
        await schema.validate(data, { abortEarly: false });
        const token = location.search.replace('?token=', '');

        if (!token) throw new Error();

        await api.post('/password/reset', {
          password: data.password,
          password_confirmation: data.password_confirmation,
          token,
        });
        addToast({
          title: 'Senha alterada',
          type: 'success',
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Erro na autenticação',
          type: 'error',
          description: 'Falha ao se resetar sua senha, tente novamente!',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="GoBarber" />
          <Form onSubmit={handleOnSubmit} ref={formRef}>
            <h1>Resetar senha</h1>
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Input name="password_confirmation" icon={FiLock} type="password" placeholder="Confirmação de senha" />
            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassoword;
