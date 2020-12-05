/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  avatar_url: string;
  name: string;
}

interface AuthContextData {
  signIn(data: AuthSignInData): Promise<void>;
  signOut(): void;
  user: User;
}

interface AuthSignInData {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: User;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber-token');
    const user = localStorage.getItem('@GoBarber-user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: AuthSignInData) => {
    const response = await api.post('/sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber-token', token);
    localStorage.setItem('@GoBarber-user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber-token');
    localStorage.removeItem('@GoBarber-user');
    setData({} as AuthState);
  }, []);

  return <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextData {
  const context = useContext<AuthContextData>(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export const AuthContext = createContext({} as AuthContextData);
