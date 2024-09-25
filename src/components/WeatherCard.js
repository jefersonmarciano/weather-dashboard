import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';
import './WeatherCard.css'; // Assegure-se de que este arquivo existe para estilos adicionais

function WeatherCard({ data }) {
  const { t } = useTranslation();
  const { addFavorite, favorites, removeFavorite } = useContext(FavoritesContext);

  const isFavorited = favorites.includes(data.name);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFavorite(data.name);
    } else {
      addFavorite(data.name);
    }
  };

  // Selecionar ícone baseado no clima
  const getWeatherIcon = (weather) => {
    const main = weather.main.toLowerCase();
    switch (main) {
      case 'clear':
        return <WiDaySunny size={80} color="#FFD700" />;
      case 'clouds':
        return <WiCloudy size={80} color="#808080" />;
      case 'rain':
        return <WiRain size={80} color="#0000FF" />;
      case 'thunderstorm':
        return <WiThunderstorm size={80} color="#800080" />;
      case 'snow':
        return <WiSnow size={80} color="#00FFFF" />;
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return <WiFog size={80} color="#A9A9A9" />;
      default:
        return <WiDaySunny size={80} color="#FFD700" />;
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <IconButton
            onClick={handleFavorite}
            color="secondary"
            aria-label={isFavorited ? t('removeFromFavorites') : t('addToFavorites')}
          >
            {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
          {getWeatherIcon(data.weather[0])}
        </Box>
        <Typography variant="h4" color="text.primary">
          {Math.round(data.main.temp)}°C
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;