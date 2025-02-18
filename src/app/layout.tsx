import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import Box from '@mui/material/Box';
import Header from '@/components/layout/Header';
import ThemeProvider from '@/components/layout/ThemeProvider';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import MainContainer from '@/components/layout/MainContainer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.variable}>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider>
            <Box display="flex">
              <Header />
              <MainContainer>{children}</MainContainer>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
