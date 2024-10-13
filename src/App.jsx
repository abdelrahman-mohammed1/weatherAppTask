import { useState } from 'react';
import styled from 'styled-components';
import { FaWind } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { Title, Input, Row, Container, Button } from './ui';
import WeatherDetail from './components/WeatherDetail';
import Spinner from './components/Spinner';
import { ToastContainer } from 'react-toastify';
import { useWeatherAndImage } from './hooks/useWeatherAndImage';
import 'react-toastify/dist/ReactToastify.min.css';
const TextDecription = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #555;
  text-align: center;
  margin: 30px 0;
  font-style: italic;
`;

const StyledApp = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.backgroundImage})`,
  },
}))`
  height: 100dvh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
`;

export default function App() {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState('London');

  const { weatherData, loading, backgroundImage } = useWeatherAndImage(city);

  function handleClick() {
    setCity(searchQuery);
    setSearchQuery('');
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setCity(searchQuery);
      setSearchQuery('');
    }
  }

  if (!weatherData) return <Spinner />;
  return loading ? (
    <Spinner />
  ) : (
    <>
      <StyledApp backgroundImage={backgroundImage}>
        <Row gap="small">
          <Input
            type="text"
            required
            placeholder="Enter City Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            Submit
          </Button>
        </Row>
        <Row>
          <Container>
            <Title>{weatherData.name}</Title>
            <Title>{date}</Title>
            <TextDecription>
              Temperature Description: {weatherData.weather[0].description}
            </TextDecription>
            <Row gap="large">
              <WeatherDetail
                kindDetail="Temperature"
                result={weatherData.main.temp}
                Icon={<TbTemperatureCelsius />}
              />
              <WeatherDetail
                kindDetail="Humidity"
                result={weatherData.main.humidity}
                Icon={<WiHumidity />}
              />
              <WeatherDetail
                kindDetail="Wind Speed"
                result={weatherData.wind.speed}
                Icon={<FaWind />}
              />
            </Row>
          </Container>
        </Row>
      </StyledApp>
      <ToastContainer position="top-right" style={{ zIndex: 9999 }} />
    </>
  );
}
