import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const useWeatherAndImage = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const previousCityRef = useRef(city);
  const previousWeatherDataRef = useRef(null);

  useEffect(() => {
    async function getWeatherData() {
      if (city && city.length > 0) {
        try {
          setLoading(true);
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
              import.meta.env.VITE_API_KEY
            }&units=metric`
          );

          if (!res.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await res.json();

          if (data.cod === 200) {
            previousCityRef.current = city;
            previousWeatherDataRef.current = { ...data, backgroundImage };
            setWeatherData(data);
            await getCityImage(city);
          } else {
            throw new Error(`City "${city}" not found`);
          }
        } catch (err) {
          console.log('Error fetching weather data:', err);
          toast.error(`City "${city}" not found. Showing last valid city.`);
          setWeatherData(previousWeatherDataRef.current);
          setBackgroundImage(
            previousWeatherDataRef.current?.backgroundImage || ''
          );
        } finally {
          setLoading(false);
        }
      }
    }

    async function getCityImage(city) {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }`
        );

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        if (data.results.length > 0) {
          const imageUrl = data.results[0].urls.full;
          setBackgroundImage(imageUrl);
          previousWeatherDataRef.current = {
            ...previousWeatherDataRef.current,
            backgroundImage: imageUrl,
          };
        } else {
          setBackgroundImage(
            previousWeatherDataRef.current?.backgroundImage || ''
          );
        }
      } catch (err) {
        console.log('Error fetching city image:', err);
      }
    }

    getWeatherData();
  }, [city]);

  return { weatherData, loading, backgroundImage };
};
