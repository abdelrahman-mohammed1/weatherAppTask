import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  right: 8px;
  top: 2px;
  font-size: 1.4rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-weight: 700;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export default Button;
