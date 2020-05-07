import * as React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    container: {

        position: "relative",
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },

    planet: {

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",

        width: ({ sizePlanet }) => sizePlanet,
        height: "auto"

    },

    atmosphere: {

        position: "relative",
        width: ({ sizeAtmosphere }) => sizeAtmosphere,
        height: "auto",

        animation:"$spin linear infinite",
        animationDuration: ({ velRotation }) => velRotation,
        animationDirection: ({ senseRotation }) => senseRotation,

    },

    "@keyframes spin": {

        "100%": { transform: "rotate(360deg)" }


    }

  });

export const Planet = ({element,elementAtmos, sizePlanet, sizeAtmosphere, senseRotation, velRotation, id}) => {

    const classes = useStyles({sizePlanet,sizeAtmosphere,senseRotation,velRotation});

    return(<div className={classes.container}>


        <img className={classes.planet} src={element} alt=""/>
        <img className={classes.atmosphere} src={elementAtmos} alt=""/>


    </div>

    );



}

Planet.propTypes = {
    element: PropTypes.string,
    elementAtmos: PropTypes.string,
    sizePlanet: PropTypes.string,
    sizeAtmosphere: PropTypes.string,
    senseRotation: PropTypes.string,
    velRotation: PropTypes.string,
    id: PropTypes.number,

  }

