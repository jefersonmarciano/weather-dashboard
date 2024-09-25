import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import ForecastChart from './components/ForecastChart';
import Favorites from './components/Favorites';
import LanguageSelector from './components/LanguageSelector';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { Container, Typography, CircularProgress, Alert, Grid, Box } from '@mui/material';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Definindo a chave de API
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // console.log('API_KEY:', API_KEY); // Remova ou comente esta linha em produção

  // Função para buscar o clima de uma cidade
  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=046c5dc7f1a8a9cf047dca5493eee684&units=metric&lang=${i18n.language}`
      );
      setWeatherData(current.data);

      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=046c5dc7f1a8a9cf047dca5493eee684&units=metric&lang=${i18n.language}`
      );
      setForecastData(forecast.data.list);
    } catch (err) {
      setError(err.response?.data?.message || t('erroAoBuscarDados'));
      setWeatherData(null);
      setForecastData([]);
    }
    setLoading(false);
  };

  // Função memoizada para buscar o clima por coordenadas
  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=046c5dc7f1a8a9cf047dca5493eee684&units=metric&lang=${i18n.language}`
      );
      setWeatherData(current.data);

      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=046c5dc7f1a8a9cf047dca5493eee684&units=metric&lang=${i18n.language}`
      );
      setForecastData(forecast.data.list);
    } catch (err) {
      setError(err.response?.data?.message || t('erroAoBuscarDados'));
      setWeatherData(null);
      setForecastData([]);
    }
    setLoading(false);
  }, [API_KEY, i18n.language, t]);

  useEffect(() => {
    // Geolocalização
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.error(err);
          setError(t('geolocationError'));
        }
      );
    } else {
      setError(t('geolocationNotSupported'));
    }
  }, [fetchWeatherByCoords, t]);

  const getBackground = () => {
    if (!weatherData) return '#f0f2f5';
    const main = weatherData.weather[0].main.toLowerCase();
    switch (main) {
      case 'clear':
        return 'linear-gradient(to right, #83a4d4, #b6fbff)';
      case 'clouds':
        return 'linear-gradient(to right, #bdc3c7, #2c3e50)';
      case 'rain':
      case 'drizzle':
        return 'linear-gradient(to right, #4facfe, #00f2fe)';
      case 'thunderstorm':
        return 'linear-gradient(to right, #373b44, #4286f4)';
      case 'snow':
        return 'linear-gradient(to right, #83a4d4, #b6fbff)';
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return 'linear-gradient(to right, #cfd9df, #e2ebf0)';
      default:
        return '#f0f2f5';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <Box
          sx={{
            minHeight: '100vh',
            background: getBackground(),
            paddingBottom: 4,
          }}
        >
          <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" component="h1" gutterBottom>
                  {t('currentLocation')}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <LanguageSelector />
              </Grid>
            </Grid>
            <SearchBar onSearch={fetchWeather} />
            {loading && (
              <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
                <CircularProgress />
              </Grid>
            )}
            {error && (
              <Alert severity="error" sx={{ marginTop: 4 }}>
                {error}
              </Alert>
            )}
            {weatherData && (
              <Grid container spacing={4} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={6}>
                  <WeatherCard data={weatherData} />
                  <WeatherDetails data={weatherData} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ForecastChart data={forecastData} />
                </Grid>
              </Grid>
            )}
            {/* Adicionando o Componente de Favoritos */}
            <Favorites onSelect={fetchWeather} />
          </Container>
        </Box>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;