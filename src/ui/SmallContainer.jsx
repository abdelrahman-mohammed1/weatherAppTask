import styled from 'styled-components';

const SmallContainer = styled.div`
  background-color: #d90909;
  color: white;
  width: fit-content;
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
  font-size: 23px;
  transition: all;
  transition-duration: 200ms;
  cursor: default;
  &:hover {
    background-color: #9e0202;
  }
`;

export default SmallContainer;
