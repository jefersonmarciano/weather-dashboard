import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

function WeatherDetails({ data }) {
  const { t } = useTranslation();

  // Funções de conversão
  const hPaToAtm = (hPa) => (hPa / 1013.25).toFixed(3);
  const mpsToKmh = (mps) => (mps * 3.6).toFixed(1);
  const mToKm = (m) => (m / 1000).toFixed(2);

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
            </Typography>
            <Typography variant="body1">
              <strong>{t('Pressão')}:</strong> {hPaToAtm(data.main.pressure)} atm
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>{t('Vento')}:</strong> {mpsToKmh(data.wind.speed)} km/h
            </Typography>
            <Typography variant="body1">
              <strong>{t('Visibilidade')}:</strong> {mToKm(data.visibility)} km
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherDetails;