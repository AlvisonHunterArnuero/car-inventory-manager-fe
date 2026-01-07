import {
  AppBar,
  Container,
  Grid,
  TextField,
  MenuItem,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useCars } from '../hooks/useCars';
import { useCarFilters } from '../hooks/useCarFilters';
import { CarCard } from './CarCard';
import { AddCarForm } from './AddCarForm';

export function CarDashboard() {
  const { cars, loading, error } = useCars();
  const {
    search,
    setSearch,
    selectedYear,
    setSelectedYear,
    availableYears,
    sortOrder,
    setSortOrder,
    filteredCars,
    addCar,
  } = useCarFilters(cars);

  if (loading)
    return (
      <CircularProgress sx={{ display: 'block', m: 'auto', mt: 5 }} />
    );
  if (error)
    return <Typography color="error">Error loading cars!</Typography>;

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Container
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Car Inventory Manager
          </Typography>

          <Box
            sx={{
              mb: 4,
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <TextField
              label="Search Model"
              size="small"
              sx={{ flexGrow: 1 }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <TextField
              select
              label="Year"
              size="small"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              sx={{ width: 120 }}
            >
              {availableYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Sort"
              size="small"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              sx={{ width: 120 }}
            >
              <MenuItem value="asc">A-Z</MenuItem>
              <MenuItem value="desc">Z-A</MenuItem>
            </TextField>
            <AddCarForm onAdd={addCar} />
          </Box>
        </Container>
      </AppBar>
      <Container sx={{ mt: 4, mb: 12 }}>
        <Grid container spacing={3}>
          {filteredCars.map((car) => (
            <Grid key={car.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
