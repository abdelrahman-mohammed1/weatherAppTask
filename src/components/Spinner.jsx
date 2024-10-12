import styled from 'styled-components';
import Lottie from 'lottie-react';
import weatherAnimation from '../../spinnerweather.json';
const StyledSpinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Spinner = () => {
  return (
    <StyledSpinner>
      <Lottie  animationData={weatherAnimation} loop={true} />
    </StyledSpinner>
  );
};

export default Spinner;
