import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

function WeatherDetails({ data }) {
  const { t } = useTranslation();

  // Funções de conversão
  const hPaToAtm = (hPa) => (hPa / 1013.25).toFixed(3);
  const mpsToKmh = (mps) => (mps * 3.6).toFixed(1);
  const mToKm = (m) => (m / 1000).toFixed(2);

  // Função para determinar a cor do indicador
  const getIndicatorColor = (value, type) => {
    switch (type) {
      case 'humidity':
        if (value < 30) return 'red';
        if (value < 40) return 'yellow';
        if (value <= 60) return 'green';
        if (value <= 70) return 'yellow';
        return 'red';
      case 'pressure':
        return value < 0.995 ? 'red' : value > 1.015 ? 'yellow' : 'green';
      case 'wind':
        return value < 5 ? 'green' : value > 20 ? 'red' : 'yellow';
      case 'visibility':
        return value < 1 ? 'red' : value < 5 ? 'yellow' : 'green';
      default:
        return 'grey';
    }
  };

  // Componente para o indicador
  const Indicator = ({ value, type }) => (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: getIndicatorColor(value, type),
        marginLeft: 1,
      }}
    />
  );

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('description')}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>{t('Humidade')}:</strong> {data.main.humidity}%
              <Indicator value={data.main.humidity} type="humidity" />
            </Typography>
            <Typography variant="body1">
              <strong>{t('Pressão')}:</strong> {hPaToAtm(data.main.pressure)} atm
              <Indicator value={hPaToAtm(data.main.pressure)} type="pressure" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>{t('Vento')}:</strong> {mpsToKmh(data.wind.speed)} km/h
              <Indicator value={mpsToKmh(data.wind.speed)} type="wind" />
            </Typography>
            <Typography variant="body1">
              <strong>{t('Visibilidade')}:</strong> {mToKm(data.visibility)} km
              <Indicator value={mToKm(data.visibility)} type="visibility" />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherDetails;