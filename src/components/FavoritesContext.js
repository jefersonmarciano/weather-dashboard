import React, { createContext, useState, useEffect } from 'react';

// Criação do Contexto
export const FavoritesContext = createContext();

// Provedor de Contexto
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carregar favoritos do LocalStorage ao montar o componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Função para adicionar uma cidade aos favoritos
  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      const updatedFavorites = [...favorites, city];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  // Função para remover uma cidade dos favoritos
  const removeFavorite = (city) => {
    const updatedFavorites = favorites.filter((fav) => fav !== city);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}