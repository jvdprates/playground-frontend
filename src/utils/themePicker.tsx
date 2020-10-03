import React from "react";

import Colors from "./constants"

export type ThemeType = {
    mainColor: string,
    secondaryColor: string,
    lightColor: string,
    darkColor: string,
    redColor: string,
    greenColor: string,
    blueColor: string
}

export const defaultTheme = {
    mainColor: Colors.lightMainColor,
    secondaryColor: Colors.lightSecondaryColor,
    lightColor: Colors.ultraLight,
    darkColor: Colors.ultraDark,
    redColor: Colors.badRed,
    greenColor: Colors.goodGreen,
    blueColor: Colors.alertBlue
}


const ThemePicker = (selected: string) =>{
    let selectedTheme: ThemeType = defaultTheme;
    switch (selected) {
        case 'dark': {
            selectedTheme = {
                mainColor: Colors.darkMainColor,
                secondaryColor: Colors.darkSecondaryColor,
                lightColor: Colors.ultraLight,
                darkColor: Colors.ultraDark,
                redColor: Colors.badRed,
                greenColor: Colors.goodGreen,
                blueColor: Colors.alertBlue
            };
            break;
        }
        case 'light': {
            selectedTheme = {
                mainColor: Colors.lightMainColor,
                secondaryColor: Colors.lightSecondaryColor,
                lightColor: Colors.ultraLight,
                darkColor: Colors.ultraDark,
                redColor: Colors.badRed,
                greenColor: Colors.goodGreen,
                blueColor: Colors.alertBlue
            };
            break;
        }
    }
    return selectedTheme;
}

export default ThemePicker;