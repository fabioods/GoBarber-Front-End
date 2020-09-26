import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

interface ToastData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'error' | 'success' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext({} as ToastData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = uuid();
    const { title, type, description } = message;
    const newMessage = {
      id,
      title,
      type,
      description,
    };
    setMessages(oldMessages => [...oldMessages, newMessage]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Toast must be within a Toast Provider');
  }
  return context;
}
