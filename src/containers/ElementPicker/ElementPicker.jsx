import * as React from "react";
import { Plantilla } from "../../componentes/Plantilla/Plantilla";
import { makeStyles } from '@material-ui/core/styles';
import { Switch } from "@material-ui/core";
import { Planet } from "../../componentes/Planet/Planet";
import { PlanetContext } from '../../utils/PlanetContext';


const useStyles = makeStyles({

        body: {

            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",

            backgroundImage: "url('/terra-form/img/FondoElement.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",


            "@media (max-width: 850px)": {

                height: "auto"

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

        subImage: {

            height: "75%",
            width: "auto",

            "@media (max-width: 850px)": {

                height: "auto",
                width: "22%",

            }

        },

        nueva: {
            backgroundColor: "#000"

        },

        water: {

            "& .MuiSwitch-thumb": {

                color: "#59C2EE",

            },

            '& + .MuiSwitch-track': {
                backgroundColor: '#000 !important'
            }

        },

        justWater: {

            color: "#59C2EE",
            '& + .MuiSwitch-track': {
                backgroundColor: '#000 !important'
            }

        },


        fire: {
            color: "#E68465",
            '& + .MuiSwitch-track': {
                backgroundColor: '#000 !important'
            },
        }

    });

export const ElementPicker = () => {


    const globalContext = React.useContext(PlanetContext);

    const [checkA, setCheckA] = React.useState(true);
    const [checkB, setCheckB] = React.useState(false);


    const handleChangeA = (event) => {

        setCheckA(event.target.checked);

        if (checkA){

            if (checkB){

                    globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/fireIsland.png",
                    elementAtmos: "/terra-form/img/fireIslandAtmos.png"

                    });



            } else {

                    globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/fireCont.png",
                    elementAtmos: "/terra-form/img/fireContAtmos.png"

                    });

            }

        } else {

            if (checkB){

                    globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/waterIsland.png",
                    elementAtmos: "/terra-form/img/waterIslandAtmos.png"

                    });


            } else {

                    globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/waterCont.png",
                    elementAtmos: "/terra-form/img/waterContAtmos.png"

                    });


            }


        }

    };

    const handleChangeB = (event) => {

        setCheckB(event.target.checked);

        if (checkA){

            if (checkB){

                globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/waterCont.png",
                    elementAtmos: "/terra-form/img/waterContAtmos.png"

                    });

            } else {

                globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/waterIsland.png",
                    elementAtmos: "/terra-form/img/waterIslandAtmos.png"

                    });

            }

        } else {

            if (checkB){

                globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/fireCont.png",
                    elementAtmos: "/terra-form/img/fireContAtmos.png"

                    });

            } else {

                globalContext.setConfig({
                    ...globalContext.config,
                    element: "/terra-form/img/fireIsland.png",
                    elementAtmos: "/terra-form/img/fireIslandAtmos.png"

                    });

            }


        }

    };

    const classes = useStyles();


    return(<div className={classes.body}>


        <Plantilla instruction="Choose the main element on your planet" back="/" next="/diameterPicker">

        <div className={classes.elementPick}>

            <div className={classes.subOne}>


                {checkA === true
                ? <img className={classes.subImage} src="/terra-form/img/selectFireUnChecked.png" alt=""/>
                : <img className={classes.subImage} src="/terra-form/img/selectFire.png" alt=""/>
                }

                <Switch checked={checkA} onChange={handleChangeA} classes={ {checked: classes.water, track: classes.nueva, thumb: classes.fire}}/>

                {checkA === false
                ? <img className={classes.subImage} src="/terra-form/img/selectWaterUnChecked.png" alt=""/>
                : <img className={classes.subImage} src="/terra-form/img/selectWater.png" alt=""/>
                }






            </div>

            {checkA === true

            ?  <div className={classes.subTwo}>

            {checkB === true

            ?<img className={classes.subImage} src="/terra-form/img/SelectContinentWaterChecked.png" alt=""/>
            : <img className={classes.subImage} src="/terra-form/img/SelectContinentWater.png" alt=""/>

            }

            <Switch  classes={ {checked: classes.justWater, track: classes.nueva, thumb: classes.justWater} } checked={checkB} onChange={handleChangeB}/>

            {checkB === false

            ? <img className={classes.subImage} src="/terra-form/img/SelectIslandWaterChecked.png" alt=""/>
            : <img className={classes.subImage} src="/terra-form/img/SelectIslandWater.png" alt=""/>

            }

        </div>
            :  <div className={classes.subTwo}>

            {checkB === true

            ?<img className={classes.subImage} src="/terra-form/img/SelectContinentFireChecked.png" alt=""/>
            : <img className={classes.subImage} src="/terra-form/img/SelectContinentFire.png" alt=""/>

            }

            <Switch classes={ {checked: classes.fire, track: classes.nueva, thumb: classes.fire}} checked={checkB} onChange={handleChangeB}/>

            {checkB === false

            ? <img className={classes.subImage} src="/terra-form/img/SelectIslandFireChecked.png" alt=""/>
            : <img className={classes.subImage} src="/terra-form/img/SelectIslandFire.png" alt=""/>

            }

        </div>

            }

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