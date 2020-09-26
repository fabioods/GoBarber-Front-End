/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthContextData {
  signIn(data: AuthSignInData): Promise<void>;
  data: AuthState;
}

interface AuthSignInData {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber-token');
    const user = localStorage.getItem('@GoBarber-user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: AuthSignInData) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber-token', token);
    localStorage.setItem('@GoBarber-user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return <AuthContext.Provider value={{ signIn, data }}>{children}</AuthContext.Provider>;
};

export const AuthContext = createContext({} as AuthContextData);
