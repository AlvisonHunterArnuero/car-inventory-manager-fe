import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function CarCard({ car }: { car: any }) {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width:640px)");
  const isTablet = useMediaQuery("(min-width:641px) and (max-width:1023px)");

  const imageUrl = isMobile ? car.mobile : isTablet ? car.tablet : car.desktop;

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={car.model}
      />
      <CardContent>
        <Typography variant="h5">
          {car.make} {car.model}
        </Typography>
        <Typography color="text.secondary">
          {car.year} | {car.color}
        </Typography>
      </CardContent>
    </Card>
  );
}
