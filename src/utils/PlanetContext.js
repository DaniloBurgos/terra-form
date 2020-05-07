import * as React from "react";

export const PlanetContext = React.createContext({

    config: {

        id:"",
        element: "",
        elementAtmos: "",
        sizePlanet:"",
        sizeAtmosphere:"",
        senseRotation:"",
        velRotation:"",

    },
    setConfig: () => null,
    planetList: [],
    setPlanetList: ()=> null,


})