import * as React from "react";
import { Typography } from "@material-ui/core";
import { NavButton } from "../../componentes/NavButton/NavButton";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    plantilla: {
      boxSizing: "border-box",
      margin: 0,
      border: 0,
      borderRadius: 3,
      padding: '0px',
      position: "relative",
      width: "55%",
      height: "60%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",


      "@media (max-width: 1580px)": {

        width: "80%",

    },

    "@media (max-width: 1100px)": {

        width: "95%",

    },

    "@media (max-width: 850px)": {

        height: "auto",

    }


    },

    content: {

        width: "100%",
        height: "76%",
        display: "flex",
        flexDirection: "row",

        justifyContent: "space-between",

        "@media (max-width: 850px)": {

            flexDirection: "column",
            height: "auto",

        }

    },

    opciones: {

        width: "43%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        order: 1,

        "@media (max-width: 850px)": {

            width: "100%",
            order: 2

        }

    },

    visualizar: {

        width: "53.08%",
        height: "100%",
        boxSizing: "border-box",
        backgroundColor: "#B180AE",
        borderStyle: "solid",
        borderWidth: "8px",
        borderRadius: "15px",
        color: "white",

        backgroundImage: "url('/img/visualizarFondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        order: 2,
        marginBottom: "0px",

        "@media (max-width: 850px)": {

            width: "100%",
            order: 1,
            marginBottom: "30px",
            marginTop: "30px",
            height: "405px"

        }

    },

    editar: {

        width: "100%",
        height: "80%",

        boxSizing: "border-box",
        backgroundColor: "#323455",

        borderStyle: "solid",
        borderWidth: "8px",
        borderRadius: "15px",

        fontSize: "1.2rem",
        fontStyle: "normal",
        fontWeight: "400",
        color: 'white',

        "@media (max-width: 850px)": {

            marginBottom: "30px"

        }

    },

    navegar: {

        width: "100%",
        height: "12%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",


        "@media (max-width: 850px)": {

            marginBottom: "30px"

        }

    },

    titulo: {

        width: "100%",
        height: "15%",

        boxSizing: "border-box",
        backgroundColor: "#B180AE",
        borderStyle: "solid",
        borderWidth: "8px",
        borderRadius: "15px",
        color: "white",

        textAlign:"center",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",

        "@media (max-width: 850px)": {

            height: "auto",
            marginTop: "30PX"

        }


    },

    mainTitle: {

        fontSize: "1.5rem",
        fontStyle: "normal",
        fontWeight: "300",
        color: 'white',
        textTransform: "uppercase",
        fontFamily: "'Source Code Pro', monospace"

    },

    subNavegar: {

        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"

    },


});

export const Plantilla = ({instruction, children, back, next}) => {

    const classes = useStyles();

    const [screenSize, setScreenSize] = React.useState("");

    return(<div className={classes.plantilla}>


    <div className={classes.titulo}>
    <Typography className={classes.mainTitle}>{instruction}</Typography>
    </div>

    <div className={classes.content}>

        <div className={classes.opciones}>

        <div className={classes.editar}>
            {children[0]}
        </div>
        <div className={classes.navegar}>

            {next==="/galery"

            ? <div className={classes.subNavegar}>
                <NavButton text="Back" link={back} position="relative"/>

                <NavButton text="End" link={next} position="relative"/>
            </div>


            : next==="/"
            ?<div  className={classes.subNavegar}>

           {/* <NavButton text="Edit List" link={back} position="relative"/> */}

            <NavButton text="Start New" link={next} position="relative"/>

            </div>

            :<div  className={classes.subNavegar}>

                <NavButton text="Back" link={back} position="relative"/>

                <NavButton text="Next" link={next} position="relative"/>

            </div>




          }


        </div>

        </div>

        <div className={classes.visualizar}>
        {children[1]}
        </div>

    </div>




    </div>



    );



}

Plantilla.propTypes = {
    tittle: PropTypes.string,
    back: PropTypes.string,
    next: PropTypes.string,

}