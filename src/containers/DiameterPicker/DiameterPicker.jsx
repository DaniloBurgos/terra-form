import * as React from "react";
import { Plantilla } from "../../componentes/Plantilla/Plantilla";
import { makeStyles } from '@material-ui/core/styles';
import { Planet } from "../../componentes/Planet/Planet";
import { PlanetContext } from '../../utils/PlanetContext';
import { AppSlider } from "../../componentes/AppSlider/AppSlider";

const useStyles = makeStyles({

        body: {

            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",

            backgroundImage: "url('/terra-form/img/FondoDiameter.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",

            "@media (max-width: 850px)": {

                height: "auto"

            }

        },

        subOne: {

            width: "100%",
            height: "50%",
            boxSizing: "border-box",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "5%"

        },
        subTwo: {

            width: "100%",
            height: "50%",
            boxSizing: "border-box",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "5%"

        },

        elementPick: {

            width: "100%",
            height: "100%",
            boxSizing: "border-box"

        },

    },
  );

export const DiameterPicker = () => {



    const globalContext = React.useContext(PlanetContext);
    const classes = useStyles();

    const handlePlanSize = (ev, newValue) => {


        globalContext.setConfig({

            ...globalContext.config,
            sizePlanet: newValue

        });

       // console.log("planetSize= "+globalContext.config.sizePlanet)


    }

    const handleAtmosSize = (ev, newValue) => {


        globalContext.setConfig({

            ...globalContext.config,
            sizeAtmosphere: newValue

        });

        /*console.log("planetAtmosphere= "+globalContext.config.sizeAtmosphere)*/


    }



    return(<div className={classes.body}>

        <Plantilla instruction="choose the size of the planet and the size of its atmosphere" back="/elementPicker" next="/rotationPicker">

        <div className={classes.elementPick}>

        <div className={classes.subOne}>
         <AppSlider value={globalContext.config.sizePlanet} min ={50} max={80} onChange={handlePlanSize} text="Planet Size" />
        </div>
        <div className={classes.subTwo}>
        <AppSlider value={globalContext.config.sizeAtmosphere}  onChange={handleAtmosSize} text="Atmosphere Size" min={60} max={80}/>
        </div>





        </div>

        <Planet

        element={globalContext.config.element}
        elementAtmos={globalContext.config.elementAtmos}
        sizePlanet={globalContext.config.sizePlanet+"%"}
        sizeAtmosphere={globalContext.config.sizeAtmosphere+"%"}
        senseRotation={globalContext.config.senseRotation}
        velRotation={globalContext.config.velRotation+"s"}

        />

        </Plantilla>

    </div>



    );



}