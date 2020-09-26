import React from 'react';

import { useTransition } from 'react-spring';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/Toast';
import ToastItem from './ToastItem';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(messages, message => message.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransition.map(({ item: message, key, props }) => (
        <ToastItem key={key} message={message} style={props} />
      ))}
    </Container>
  );
};

export default Toast;
