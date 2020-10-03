import React from 'react';
import "./global.css";

import Routes from "./routes";

import ThemeContextProvider from "./contexts/ThemeContext";


const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}

export default App;
