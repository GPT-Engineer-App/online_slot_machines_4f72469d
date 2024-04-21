import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1c2237",
    800: "#161b2f",
    700: "#0d0f17",
  },
};

const theme = extendTheme({
  colors: {
    ...colors,
    brand: {
      ...colors.brand,
      600: "#ff9800", // Adjusted to match the vibrant color scheme of 5gringos.com
      500: "#ffc107", // Additional colors for the vibrant theme
      400: "#ffeb3b",
    },
  },
  components: {
    Button: {
      // Updating Button styles to match 5gringos.com's buttons
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.600" : "brand.400",
          color: "white",
        }),
      },
    },
    // Other component overrides can go here
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
