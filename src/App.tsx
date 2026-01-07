import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { automotiveTheme } from "./theme";
import { CarDashboard } from "./components/CarDashboard";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  console.log("App component executing...");
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={automotiveTheme}>
        <CssBaseline />
        <CarDashboard />
      </ThemeProvider>
    </ApolloProvider>
  );
}
