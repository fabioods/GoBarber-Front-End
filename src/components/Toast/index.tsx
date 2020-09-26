import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, ToastItem } from './styles';

const Toast: React.FC = () => {
  return (
    <Container>
      <ToastItem hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer um login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastItem>
      <ToastItem type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastItem>
      <ToastItem type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer um login na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastItem>
    </Container>
  );
};

export default Toast;
