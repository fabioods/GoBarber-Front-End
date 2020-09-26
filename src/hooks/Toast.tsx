import React, { createContext, useCallback, useContext } from 'react';
import Toast from '../components/Toast';

interface ToastData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext({} as ToastData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('add toast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('remove toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast />
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
