import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaWind } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { TbTemperatureCelsius } from 'react-icons/tb';
import Button from './ui/Button';
import Container from './ui/Container';
import Input from './ui/Input';
import Title from './ui/Title';
import WeatherDetail from './components/WeatherDetail';
import Spinner from './components/Spinner';
const TextDecription = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #555;
  text-align: center;
  margin: 30px 0;
  font-style: italic;
`;

const StyledApp = styled.div`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  height: 100dvh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap === 'small' ? '2px' : '16px')};
`;

export default function App() {
  const [city, setCity] = useState('London');
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cityImage, setCityImage] = useState('');
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  //
  useEffect(() => {
    async function getWeatherData() {
      if (city && city.length > 0) {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=metric`
          );
          const data = await res.json();
          console.log(data);
          setWeatherData(data);
        } catch (err) {
          console.log(err);
        }
      }
    }

    async function getCityImage() {
      if (city && city.length > 0) {
        try {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${city}&client_id=${
              import.meta.env.VITE_UNSPLASH_ACCESS_KEY
            }`
          );
          const data = await res.json();
          if (data.results.length > 0) {
            console.log(data);
            setCityImage(data.results[0].urls.full);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }

    getWeatherData();
    getCityImage();
  }, [city]);

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
  return (
    <StyledApp backgroundImage={cityImage}>
      <Row gap="small">
        <Input
          type="text"
          placeholder="Enter City Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
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
  );
}
