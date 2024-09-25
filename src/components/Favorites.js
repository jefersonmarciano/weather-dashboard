import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';

function Favorites({ onSelect }) {
  const { t } = useTranslation();
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {t('favorites')}
        </Typography>
        {favorites.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            {t('noFavorites')}
          </Typography>
        ) : (
          <List>
            {favorites.map((city, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => removeFavorite(city)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                }
              >
                <ListItemButton onClick={() => onSelect(city)}>
                  <ListItemIcon>
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={city} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}

export default Favorites;