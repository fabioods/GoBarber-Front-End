import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthContextProvider } from './hooks/AuthContext';
import Toast from './components/Toast';

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <SignIn />
      </AuthContextProvider>
      <Toast />
      <GlobalStyle />
    </>
  );
};

export default App;
