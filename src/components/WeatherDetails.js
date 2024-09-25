import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

function WeatherDetails({ data }) {
  const { t } = useTranslation();

  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('description')}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>{t('humidity')}:</strong> {data.main.humidity}%
            </Typography>
            <Typography variant="body1">
              <strong>{t('pressure')}:</strong> {data.main.pressure} hPa
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>{t('wind')}:</strong> {data.wind.speed} m/s
            </Typography>
            <Typography variant="body1">
              <strong>{t('visibility')}:</strong> {data.visibility} m
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherDetails;