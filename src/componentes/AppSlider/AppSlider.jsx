import * as React from "react";
import {Slider, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      boxSizing: "border-box",
      backgroundColor: "#B43F90",
      '&:hover': {
        backgroundColor: "#7D2D69",
     },
      borderStyle: "solid",
      borderWidth: "8px",
      borderRadius: "15px",

      fontSize: "1.2rem",
      fontStyle: "normal",
      textTransform: "uppercase",
      fontWeight: "300",
      color: 'white',

      height: "100%",
      width: "45%",

    },

    nuevoThumb: {

      backgroundImage: "url('/terra-form/img/sliderThumb.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "30px",
      height: "30px",

      backgroundColor: "rgb(0,0,0,0)",
      marginTop: "-13px",
      marginLeft: "-13px",


    },

    nuevoTrack: {

      backgroundColor: "white",

      height: "2px",

      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "15px",
      borderColor: "white",


      boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"


    },

    nuevoRail: {

      backgroundColor: "white",

      height: "1px",

      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "15px",
      borderColor: "white",
      boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"

    },

    nuevoRoot: {

      width: "80%",
      height: "auto",

    },

    title: {


      fontStyle: "normal",
      fontWeight: "400",
      fontFamily: "'Source Code Pro', monospace",
      textAlign: "center",
      width: "100%",
      fontSize: "1.5rem",
      marginBottom: "5px"

    },

    container: {

      width: "80%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      "@media (max-width: 850px)": {

        height: "70%",
        marginBottom: "30px"

    }

    },

    sliderCont: {

      width: "100%",
      height: "70px",

      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      alignItems:"center",
      position: "relative",
      backgroundImage: "url('/terra-form/img/sliderCont.png')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",


    },

    trackImage: {

      width: "100%",
      height: "auto",
      position: "absolute",
      top: "-5px"

    }

  });

export const AppSlider = ({ text, onChange, value, min, max}) => {

  const classes = useStyles();


    return(

        <div className={classes.container}>
            <Typography className={classes.title}>
            {text}

            </Typography>

            <div className={classes.sliderCont}>

          {/* <img className={classes.trackImage} src="/img/sliderCont.png" alt=""/> */}

            <Slider

             value={value} min ={min}
             max={max} onChange={onChange}
             classes={{rail: classes.nuevoRail, thumb: classes.nuevoThumb, track: classes.nuevoTrack, root: classes.nuevoRoot}}/>



            </div>

        </div>
    );

}

AppSlider.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  }