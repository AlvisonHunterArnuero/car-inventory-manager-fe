import {
  Box,
  Typography,
  Container,
  Link,
  IconButton,
  Stack,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#001f24',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 1.5,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" color="white">
            {'© '} {currentYear}{' '}
            <Link color="inherit" underline="hover" href="#">
              Car Inventory Manager
            </Link>
            {' • All Rights Reserved - Built by Alvison Hunter'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              component="a"
              href="https://alvisonhunter.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              component="a"
              href="https://www.linkedin.com/in/alvisonhunter/"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              component="a"
              href="https://dev.to/alvisonhunter"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LogoDevIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
