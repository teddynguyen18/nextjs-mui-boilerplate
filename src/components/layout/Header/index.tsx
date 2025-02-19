import AppBar from '@mui/material/AppBar';
import ThemeToggleButton from './_ThemeToggleButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export const CustomToolbar = Toolbar;

export default React.memo(function Header() {
  return (
    <AppBar>
      <CustomToolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          href="/"
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          LOGO
        </Typography>
        <ThemeToggleButton />
      </CustomToolbar>
    </AppBar>
  );
});
