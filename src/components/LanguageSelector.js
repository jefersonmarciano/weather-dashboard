import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="language-selector-label">Language</InputLabel>
      <Select
        labelId="language-selector-label"
        id="language-selector"
        value={i18n.language}
        onChange={handleChange}
        label="Language"
      >
        <MenuItem value="pt">Português</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;