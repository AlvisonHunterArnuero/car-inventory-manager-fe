import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export function CarCard({ car }: { car: any }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const imageUrl = isMobile ? car.mobile : isTablet ? car.tablet : car.desktop;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={`${car.make} ${car.model}`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            'https://placehold.co/400x300/eee/999?text=Image+Not+Found';
        }}
        sx={{
          height: 250,
          width: '100%',
          objectFit: 'cover',
          border: '0px solid transparent',
          borderRadius: '8px 8px 0 0',
          backgroundColor: '#f5f5f5',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {car.make} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.year} • {car.color}
        </Typography>
      </CardContent>
    </Card>
  );
}
