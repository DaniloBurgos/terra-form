import * as React from "react";
import {
    Plantilla
} from "../../componentes/Plantilla/Plantilla";
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    PlanetContext
} from '../../utils/PlanetContext';
import {
    Planet
} from "../../componentes/Planet/Planet";
import {
    Button
} from "@material-ui/core";
import {
    useHistory
} from "react-router-dom";

const useStyles = makeStyles({

    body: {

        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: "url('/img/FondoHome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

    },

    planetGalery: {

        width: "100%",
        height: "90%",

        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        paddingTop: "5%",
        paddingBottom: "5%",
        overflow: "auto"



    },

    elementGalery: {

        width: "33%",
        height: "auto",
        marginTop: "5px",
        marginBottom: "5px",

    },

    edit: {

        position: "absolute",
        top: "10px",
        left: "10px",

        backgroundImage: "url('/img/editar.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgb(0,0,0,0)",
        width: "53px",
        height: "53px",
        boxShadow: "none",

        '&:hover': {

            backgroundImage: "url('/img/editarHover.png')",
            backgroundColor: "rgb(0,0,0,0)",
            boxShadow: "none"
        }

    },

    delete: {

        position: "absolute",
        top: "10px",
        right: "10px",

        backgroundImage: "url('/img/borrar.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgb(0,0,0,0)",
        width: "53px",
        height: "53px",
        boxShadow: "none",

        '&:hover': {

            backgroundImage: "url('/img/borrarHover.png')",
            backgroundColor: "rgb(0,0,0,0)",
            boxShadow: "none"
        }

    },



    contPreview: {

        position: "relative",
        width: "100%",
        height: "100%"
    }

}, );

export const Galery = () => {

    const history = useHistory();
    const classes = useStyles();
    const globalContext = React.useContext(PlanetContext);

    const [selected, setSelected] = React.useState(null);

    const handleClick = (planet) => {

        setSelected(planet);

    }

    const handleEdit = (elemId) => {

        //  console.log(elemId);
        // <Redirect to="/elementPicker"/>  <-- por qué no funciona esto?

        const chosen = globalContext.planetList.findIndex((elem) => {

            return elem.id === elemId;

        });

        /*

        Hacer esto para borrar el elemento antes de editarlo, va a perder la posición en la lista,
        para ver la otra forma que es comparando el id actual con uno en la lista ir a
        NavButton en la línea 41

        globalContext.setPlanetList([

            ...globalContext.planetList.slice(0, chosen),
            ...globalContext.planetList.slice(chosen + 1)

        ]);

        setSelected(null);

        */


        globalContext.setConfig(selected);


        history.push("/elementPicker");

    }

    const handleDelete = (elemId) => {


        const chosen = globalContext.planetList.findIndex((elem) => {

            return elem.id === elemId;

        });


        globalContext.setPlanetList([

            ...globalContext.planetList.slice(0, chosen),
            ...globalContext.planetList.slice(chosen + 1)

        ]);

        setSelected(null);

        //console.log(elemId);



    }

    return ( <div className = {classes.body} >

        {/*console.log(globalContext.planetList)*/ }

        <Plantilla instruction = "Here you can watch your creations" back = "/rotationPicker" next = "/" >

        <div className = {classes.planetGalery} >

        {globalContext.planetList.map((planet) => {

                return <Button key = {planet.id} onClick = {() => handleClick(planet)} className = {classes.elementGalery}>


                < Planet element = {planet.element} elementAtmos = {planet.elementAtmos} sizePlanet = {planet.sizePlanet + "%"}
                sizeAtmosphere = {planet.sizeAtmosphere + "%"}
                senseRotation = {planet.senseRotation}
                velRotation = {planet.velRotation + "s"}
                />


                </Button>

            })
        }

        </div>

         {selected && <div className = {classes.contPreview}>


                <Planet

            element = {selected.element}
            elementAtmos = {selected.elementAtmos}
            sizePlanet = {selected.sizePlanet + "%"}
            sizeAtmosphere = {selected.sizeAtmosphere + "%"}
            senseRotation = {selected.senseRotation}
            velRotation = {selected.velRotation + "s"}

            />

            <Button className = {classes.edit} disableRipple = {true} onClick = {() => handleEdit(selected.id)}/>
            <Button className = {classes.delete} disableRipple = {true} onClick = {() => handleDelete(selected.id)}/>


            </div>}


        </Plantilla>

        </div>



    );



}