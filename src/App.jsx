import { Flex, Box, Text } from "@chakra-ui/react";
import { MockAPIProvider } from "./contexts/MockAPIContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Pokies from "./pages/Pokies";
import LiveCasino from "./pages/LiveCasino";
import Navigation from "./components/Navigation";
import GenericGamePage from "./pages/GenericGamePage";
import NewGamePage from "./pages/NewGamePage";
import TopGames from "./pages/TopGames";
import FavoritesPage from "./pages/FavoritesPage";
import PromotionsPage from "./pages/PromotionsPage";

function App() {
  return (
    <Router>
      <MockAPIProvider>
        <Navigation />
        <Flex direction="column" minH="100vh" bg="gray.50">
          <Box flex="1">
            <Routes>
              <Route path="/" element={<Index />} />

              <Route path="/pokies" element={<Pokies />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/live-casino" element={<LiveCasino />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </MockAPIProvider>
    </Router>
  );
}

export default App;
