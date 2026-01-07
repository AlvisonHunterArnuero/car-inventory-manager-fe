import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { automotiveTheme } from './theme';
import { CarDashboard } from './components/CarDashboard';
import { Footer } from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={automotiveTheme}>
        <CssBaseline />
        <CarDashboard />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}
