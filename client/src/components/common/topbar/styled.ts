import styled from 'styled-components';

interface ButtonProps {
  isactive: string;
}

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

export const Button = styled.button<ButtonProps>`
  width: 100px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${(props) => (props.isactive ? '#afb7ff' : '#1f009d')};
  background-color: ${(props) => (props.isactive ? '#afb7ff' : '#1f009d')};
  color: ${(props) => (props.isactive ? '#1f009d' : 'white')};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #afb7ff;
    color: #1f009d;
    border-color: #afb7ff;
  }
`;
