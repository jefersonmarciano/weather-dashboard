import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';
import './ForecastCards.css';

function ForecastCards({ data }) {
  const { t } = useTranslation();

  const getWeatherIcon = (weather) => {
    const main = weather.toLowerCase();
    switch (main) {
      case 'clear':
        return <WiDaySunny size={40} color="#FFD700" />;
      case 'clouds':
        return <WiCloudy size={40} color="#808080" />;
      case 'rain':
        return <WiRain size={40} color="#0000FF" />;
      case 'thunderstorm':
        return <WiThunderstorm size={40} color="#800080" />;
      case 'snow':
        return <WiSnow size={40} color="#00FFFF" />;
      default:
        return <WiFog size={40} color="#A9A9A9" />;
    }
  };

  const getDayOfWeek = (dateString) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const date = new Date(dateString);
    return days[date.getDay()];
  };

  // Agrupar dados da previsão por dia
  const groupedForecast = data.reduce((acc, item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // Obter médias diárias
  const dailyForecast = Object.entries(groupedForecast).map(([date, items]) => {
    const avgTemp = items.reduce((sum, item) => sum + item.main.temp, 0) / items.length;
    const mostFrequentWeather = items.reduce((acc, item) => {
      acc[item.weather[0].main] = (acc[item.weather[0].main] || 0) + 1;
      return acc;
    }, {});
    const mainWeather = Object.entries(mostFrequentWeather).sort((a, b) => b[1] - a[1])[0][0];
    return { date, avgTemp, mainWeather };
  }).slice(1, 6); // Obter próximos 5 dias

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('5DayForecast')}
        </Typography>
        <Grid container spacing={2}>
          {dailyForecast.map((day, index) => (
            <Grid item xs={12} sm={2} key={index}>
              <Box className="forecast-card">
                <Typography variant="subtitle1">{getDayOfWeek(day.date)}</Typography>
                <Box className="weather-icon">{getWeatherIcon(day.mainWeather)}</Box>
                <Typography variant="h6">{Math.round(day.avgTemp)}°C</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ForecastCards;
