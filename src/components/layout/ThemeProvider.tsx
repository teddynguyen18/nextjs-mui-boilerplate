'use client';

import { createTheme, ThemeProvider as _ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: { fontFamily: 'var(--font-roboto)' },
  components: { MuiLink: { defaultProps: { component: Link } } },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: { light: true, dark: true },
});

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <_ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </_ThemeProvider>
  );
}
