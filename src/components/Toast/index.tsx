import React from 'react';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/Toast';
import ToastItem from './ToastItem';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <ToastItem key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default Toast;
