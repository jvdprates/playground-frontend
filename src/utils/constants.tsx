import React from "react";

interface ColorType {
    lightMainColor: string,
    lightSecondaryColor: string,
    darkMainColor: string,
    darkSecondaryColor: string,
    ultraLight: string,
    ultraDark: string,
    badRed: string,
    goodGreen: string,
    alertBlue: string,
}

const Colors: ColorType = {
    lightMainColor: "#7d8cc4",
    lightSecondaryColor: "#93E1d8",
    darkMainColor: "#310A31",
    darkSecondaryColor: "#726Da8",
    ultraLight: "#ddfff7",
    ultraDark: "#0d1821",
    badRed: "#d72638",
    goodGreen: "#95c623",
    alertBlue: "#0091AD",
}

export default Colors;