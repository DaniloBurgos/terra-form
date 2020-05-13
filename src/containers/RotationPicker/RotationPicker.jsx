import * as React from "react";
import { Plantilla } from "../../componentes/Plantilla/Plantilla";
import { makeStyles } from '@material-ui/core/styles';
import { PlanetContext } from "../../utils/PlanetContext";
import { Planet } from "../../componentes/Planet/Planet";
import { Button } from "@material-ui/core";
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

            backgroundImage: "url('/img/FondoAtmosphere.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",

            "@media (max-width: 850px)": {

                height: "auto"

            }

        },


        leftButton: {

            backgroundImage: "url('/img/left.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgb(0,0,0,0)",
            width: "130px",
            height: "130px",
            boxShadow: "none",
            marginRight:"5%",

            '&:hover': {

                backgroundImage: "url('/img/leftHover.png')",

                backgroundColor: "rgb(0,0,0,0)",
                boxShadow: "none"


            }

        },

        rightButton: {

            backgroundImage: "url('/img/right.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgb(0,0,0,0)",
            width: "130px",
            height: "130px",
            boxShadow: "none",
            marginLeft:"5%",

            '&:hover': {

                backgroundImage: "url('/img/rightHover.png')",

                backgroundColor: "rgb(0,0,0,0)",
                boxShadow: "none"


            }

        },

        elementPick: {

            width: "100%",
            height: "100%",
            boxSizing: "border-box"

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



    },
  );

export const RotationPicker = () => {

    const globalContext = React.useContext(PlanetContext);
    const classes = useStyles();

    const handleVelRotation = (ev,newValue) => {

        globalContext.setConfig({
            ...globalContext.config,
            velRotation: newValue
        });



    }

    const handleRight = () => {


        globalContext.setConfig({

            ...globalContext.config,
            senseRotation: "normal",

        });



    }

    const handleLeft = () => {


        globalContext.setConfig({

            ...globalContext.config,
            senseRotation: "reverse",

        });



    }


    return(<div className={classes.body}>

        <Plantilla instruction="choose the direction of rotation and its speed" back="/diameterPicker" next="/galery">

        <div className={classes.elementPick}>




        <div className={classes.subOne}>

        <Button disableRipple={true} classes={{root: classes.leftButton}} onClick={handleLeft}>

            </Button>

            <Button disableRipple={true} classes={{root: classes.rightButton}} onClick={handleRight}>

            </Button>

        </div>

        <div className={classes.subTwo}>

        <AppSlider  value={globalContext.config.velRotation} min={50} max={200} onChange={handleVelRotation} text="Rotation velocity"/>

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