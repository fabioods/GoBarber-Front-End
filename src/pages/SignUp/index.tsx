import React, { useCallback } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Container, Background, Content } from './styles';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const handleOnSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(3, 'Digite um nome de pelo menos 3 letras.'),
        email: Yup.string().required('Digite um e-mail.').email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'Digite uma senha de pelo menos 6 dígitos.'),
      });
      console.table(data);
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form
          // initialData={{ name: 'Fábio dos Santos' }}
          onSubmit={handleOnSubmit}
        >
          <h1>Faça seu cadastro</h1>
          <Input name="name" type="text" icon={FiUser} placeholder="Nome" />
          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="create">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
