import React, { createContext, useState, useEffect } from "react";

export const MockAPIContext = createContext();

export const MockAPIProvider = ({ children }) => {
  const recordGameResult = async (gameName, result) => {
    // Logic to record the game result and send it to the backend
    try {
      const response = await fetch("https://backengine-1ked.fly.dev/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameName, result }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(`Game ${gameName} result recorded: ${result}`);
    } catch (error) {
      console.error("Error recording game result:", error);
    }
    console.log(`Game ${gameName} result: ${result}`);
    // This could be extended to update the state or make an API call to record the result
  };

  const [games, setGames] = useState([]);
  const [playedGames, setPlayedGames] = useState([]);
  const [gameOutcome, setGameOutcome] = useState(null);
  const [favoriteGames, setFavoriteGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await fetch("https://backengine-1ked.fly.dev/games");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGames(data.games);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const markGameAsPlayed = (gameName) => {
    if (!playedGames.includes(gameName)) {
      setPlayedGames([...playedGames, gameName]);
    }
  };

  const playGame = async (gameName) => {
    try {
      const response = await fetch("https://backengine-1ked.fly.dev/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameName, result: "played" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGameOutcome(data.outcome);
      markGameAsPlayed(gameName);
    } catch (error) {
      console.error("Error playing game:", error);
    }
  };

  const resetGameOutcome = () => {
    setGameOutcome(null);
  };

  const toggleGameFavorite = (gameName) => {
    setFavoriteGames((prevFavorites) => (prevFavorites.includes(gameName) ? prevFavorites.filter((name) => name !== gameName) : [...prevFavorites, gameName]));
  };

  const [balance, setBalance] = useState(1000);

  const fetchBalance = async () => {
    return balance;
  };

  const updateBalance = async (newBalance) => {
    setBalance(newBalance);
  };

  return (
    <MockAPIContext.Provider
      value={{
        games,
        fetchGames,
        playedGames,
        markGameAsPlayed,
        playGame,
        gameOutcome,
        resetGameOutcome,
        favoriteGames,
        toggleGameFavorite,
        fetchBalance,
        updateBalance,
      }}
    >
      {children}
    </MockAPIContext.Provider>
  );
};
