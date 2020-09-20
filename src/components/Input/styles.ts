import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 1.6rem;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isError &&
    css`
      border: 2px solid #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}




  input {
    flex: 1;
    background: #232129;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1.6rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
