import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  text-transform: capitalize;
  fontSize: 1.4rem;
  border-radius: 3px;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radium: 0.05rem;
  color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2em 0.5em;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover{
      background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
      color: var(--mainBlue);
  }
  &focus{
      outline: none;
  }
`
