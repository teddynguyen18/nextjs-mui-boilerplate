'use client';

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorScheme } from '@mui/material';
import { ThemeMode } from '@/consts/theme';

export default function ThemeToggleButton() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  const handleThemeToggle = () => {
    const newTheme = mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
    setMode(newTheme);
  };

  return (
    <IconButton aria-label="theme toggle" size="large" edge="end" sx={{ ml: 2 }} onClick={handleThemeToggle}>
      {mode === ThemeMode.DARK ? <LightModeIcon color="primary" /> : <DarkModeIcon sx={{ color: 'white' }} />}
    </IconButton>
  );
}
