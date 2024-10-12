import styled from 'styled-components';

const Input = styled.input`
  width: 60%;
  font-size: 1.4rem;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

export default Input;
