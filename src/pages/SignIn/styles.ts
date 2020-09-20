import styled from 'styled-components';

import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 8rem 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 1.6rem;
      width: 100%;
      color: #f4ede8;
      &::placeholder {
        color: #666360;
      }
      & + input {
        margin-top: 0.8rem;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 1.6rem;
      width: 100%;
      color: #312e38;
      font-weight: 500;
      margin-top: 1.6rem;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 2.4rem;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 1.6rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
