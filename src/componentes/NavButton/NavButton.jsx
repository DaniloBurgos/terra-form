import * as React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { PlanetContext } from '../../utils/PlanetContext';
import {v4} from "uuid";



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
  });

export const NavButton = ({ text, link}) => {

    const classes = useStyles();
    const globalContext = React.useContext(PlanetContext);

    const [edition, setEdition] = React.useState(0);

/*

        Hacer esto para borrar el elemento antes de editarlo, va a perder la posición en la lista


    React.useEffect(()=>{

      globalContext.setConfig({
        ...globalContext.config,
        id: v4(),
      });

    },[]);

    const handleFinish = () => {

      if (text==="End"){

        globalContext.setPlanetList([
          ...globalContext.planetList,
          {

            id: globalContext.config.id,
            element: globalContext.config.element,
            elementAtmos: globalContext.config.elementAtmos,
            sizePlanet: globalContext.config.sizePlanet,
            sizeAtmosphere: globalContext.config.sizeAtmosphere,
            senseRotation: globalContext.config.senseRotation,
            velRotation: globalContext.config.velRotation,

          }
        ]);

        globalContext.setConfig({

       //   id: "",
          element: "/img/waterCont.png",
          elementAtmos: "img/waterContAtmos.png",
          sizePlanet:65,
          sizeAtmosphere:65,
          senseRotation:"normal",
          velRotation:165,

        });


      }


    }
*/

React.useEffect(()=>{

  if (text==="End"){

    if(globalContext.config.id ===""){

      globalContext.setConfig({
        ...globalContext.config,
        id: v4(),
      });

      setEdition(1);


    } else {

    setEdition(2);

    }
  }


},[]);


const handleFinish = () => {

  if (text==="End"){

    if(edition===1){

      globalContext.setPlanetList([
        ...globalContext.planetList,
        {

          id: globalContext.config.id,
          element: globalContext.config.element,
          elementAtmos: globalContext.config.elementAtmos,
          sizePlanet: globalContext.config.sizePlanet,
          sizeAtmosphere: globalContext.config.sizeAtmosphere,
          senseRotation: globalContext.config.senseRotation,
          velRotation: globalContext.config.velRotation,

        }
      ]);

      globalContext.setConfig({

        id: "",
        element: "/img/waterCont.png",
        elementAtmos: "img/waterContAtmos.png",
        sizePlanet:65,
        sizeAtmosphere:65,
        senseRotation:"normal",
        velRotation:165,

      });


    }

    if (edition===2) {

      const chosen = globalContext.planetList.findIndex((elem) => {

        return elem.id === globalContext.config.id;

    });

    const editado = globalContext.planetList.slice();
    editado.splice(chosen,1,globalContext.config);
    globalContext.setPlanetList(editado);
    globalContext.setConfig({
      ...globalContext.config,
      id:""
    })


    }




  }


}

    return(
        <Button onClick={handleFinish} className={classes.root} component={Link} to={link}>
         {text}
        </Button>
    );

}

NavButton.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
  }