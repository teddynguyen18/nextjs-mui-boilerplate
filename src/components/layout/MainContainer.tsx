import Box from '@mui/material/Box';
import { CustomToolbar } from './Header';
import Container from '@mui/material/Container';

export default function MainContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box component="main" flexGrow={1}>
      <CustomToolbar />
      <Container fixed>{children}</Container>
    </Box>
  );
}
