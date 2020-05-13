import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles({

    homeButton: {
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

        position: "absolute",
        bottom: "9%",
        left: "13%",
        transform: "rotate(-4deg)",


        "@media (max-width: 850px)": {

            bottom: "1%",
            left: "9%",
            transform: "rotate(0deg)",

        }


    },

    bodyHome: {

        width: "100vw",
        height: "100vh",
        backgroundImage: 'url("/img/FondoHome.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    panelContainer: {

        width: "50%",
        position: "relative",

            "& img": {

                objectFit: "contain",
                maxWidth: "100%"

        },

        "@media (max-width: 1250px)": {

            width: "70%",

        },

        "@media (max-width: 850px)": {

            width: "95%",

        }



    },

    planetasHome: {
        position: "absolute"

    },

    tierraHome: {
        top: "25%",
        left: "40%",
        width: "35%"
    },

    nubesTierraHome: {
        width: "35%",
        top: "25%",
        left: "40%",
        animation:"$spin 230s linear infinite",
        animationDirection: "reverse"
    },



    AmarilloHome: {

        top: "36%",
        left: "78%",
        width: "35%",

        "@media (max-width: 850px)": {

            top: "56%",
            left: "49%",
            width: "48%"

        }






    },

    nubesAmarilloHome: {
        top: "36%",
        left: "76%",
        width: "35%",
        animation: "$spin 180s linear infinite",

        "@media (max-width: 850px)": {

            top: "56%",
            left: "49%",
            width: "48%"

        }
    },

    marteHome: {
        top: "23%",
        left: "73%;",
        width: "20%;"

    },

    nubesMarteHome: {
        top: "23%",
        left: "73%",
        width: "20%",
        animation: "$spin 80s linear infinite",
        animationDelay: "-55s"
    },

    nose: {
        width: "12%",
        top: "32%",
        left: "31%",
        animation: "$spin 170s linear infinite"

    },


    bannerDesk:{

        display: "block",

        "@media (max-width: 850px)": {

            display: "none",

        }




    },

    bannerMobile: {

        display: "none",

        "@media (max-width: 850px)": {

            display: "block",

        }




    },



    "@keyframes spin": {

        "100%": { transform: "rotate(360deg)" }


    }


});


export const Home = () => {

    const classes = useStyles();

    return(<div className={classes.bodyHome}>

        <div className={classes.panelContainer}>

            <img src="/img/banner.png" className={classes.bannerDesk} alt=""/>
            <img src="/img/BannerMobile.png" className={classes.bannerMobile} alt=""/>

            <img src="/img/noSe.png" className={classes.planetasHome+ ' ' + classes.nose} alt=""/>

            <img src="/img/tierraIntro.png" className={classes.planetasHome+ ' ' + classes.tierraHome} alt=""/>
            <img src="/img/nubesTierraIntro.png" className={classes.planetasHome+ ' ' + classes.nubesTierraHome} alt=""/>

            <img src="/img/marte.png" className={classes.planetasHome+ ' ' + classes.marteHome} alt=""/>
            <img src="/img/lunasMarte.png" className={classes.planetasHome+ ' ' + classes.nubesMarteHome} alt=""/>

            <img src="/img/planetaAmarilloIntro.png" className={classes.planetasHome+ ' ' + classes.AmarilloHome} alt=""/>
            <img src="/img/nubesPlanetaAmarillo.png" className={classes.planetasHome+ ' ' + classes.nubesAmarilloHome} alt=""/>

            <Button className={classes.homeButton} component={Link} to="/elementPicker">
                START
            </Button>




        </div>





    </div>



    );



}