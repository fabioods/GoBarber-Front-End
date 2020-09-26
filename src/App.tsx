import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthContextProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <SignIn />
      </AuthContextProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
