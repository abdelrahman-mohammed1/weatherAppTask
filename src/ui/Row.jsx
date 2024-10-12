import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap === 'small' ? '2px' : '16px')};
`;

export default Row;
