import React, { useState } from "react";


const ThemeContext = React.createContext<themeOptions>({ selected: 'dark', setTheme: () => { } });

type themeOptions = {
    selected: string,
    setTheme: Function,
}

const ThemeContextProvider: React.FC = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState<string>('dark');

    const themeActions = {
        selected: selectedTheme,
        setTheme: setSelectedTheme
    }

    return (
        <ThemeContext.Provider value={themeActions}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;

export { ThemeContext };