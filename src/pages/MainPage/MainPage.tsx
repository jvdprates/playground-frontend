import React, { useContext, useEffect, useState } from 'react';

import "./styles.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import ThemePicker, {ThemeType, defaultTheme} from "../../utils/themePicker";

const MainPage: React.FC = (props) => {
    const {selected, setTheme} = useContext(ThemeContext);
    const [themeStyle, setThemeStyle] = useState<ThemeType>(defaultTheme);

    useEffect(() => {
        const selectedTheme = ThemePicker(selected)
        setThemeStyle(selectedTheme);
    }, [selected])


    function handleChange(theme: string){
        setTheme(theme);
    };

    return (
        <div className="mainBody" style={{ backgroundColor: themeStyle.lightColor }}>
            <div className="mainHeader" style={{ backgroundColor: themeStyle.mainColor }}>
                <div className="mainIcon"></div>
                <div className="mainTitle"></div>
                <div className="mainButton">
                    {
                        selected === "dark" ? <button onClick={(e) =>handleChange("light")}>Modo claro</button> 
                        : <button onClick={(e) =>handleChange("dark")}>Modo escuro</button>
                    }
                </div>
            </div>
            <div className="mainContent" style={{ backgroundColor: themeStyle.secondaryColor }}>
                <div className="mainCentralBox" style={{ backgroundColor: themeStyle.mainColor }}></div>
            </div>
            <div className="mainFooter" style={{ backgroundColor: themeStyle.mainColor }}>
                <div className="mainFooterText"></div>
            </div>
        </div>
    )
}

export default MainPage;
