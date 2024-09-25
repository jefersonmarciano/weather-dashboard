import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

function ForecastChart({ data }) {
  const { t } = useTranslation();

  // Processa os dados para o gráfico
  const chartData = {
    labels: data.map((item) => item.dt_txt.split(' ')[0]),
    datasets: [
      {
        label: `${t('temperature')} (°C)`,
        data: data.map((item) => item.main.temp),
        fill: false,
        backgroundColor: '#1976d2',
        borderColor: '#1976d2',
      },
      {
        label: `${t('feelsLike')} (°C)`,
        data: data.map((item) => item.main.feels_like),
        fill: false,
        backgroundColor: '#ff9800',
        borderColor: '#ff9800',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('5DayForecast')}
        </Typography>
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
}

export default ForecastChart;