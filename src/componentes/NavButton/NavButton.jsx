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

  if (text==="End"){  //si el texto del botón de next step dice end

    if(globalContext.config.id ===""){ //y el id del planeta en el contexto actual está vacía

      globalContext.setConfig({ //seteale un id usando la librería v4
        ...globalContext.config,
        id: v4(),
      });

      setEdition(1); // si vamos a galería y venimos de un planeta nuevo setea el estado a 1


    } else {

    setEdition(2); // si vamos a galería y el planeta ya tiene id, setea el estado a 2

    }
  }


},[]);


const handleFinish = () => {

  if (text==="End"){ //si doy click a next y texto dice End

    if(edition===1){ //y venimos de un planeta nuevo

      globalContext.setPlanetList([ // agrego un objeto a la lista de planetas con los datos del contexto actual
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

      globalContext.setConfig({  // y seteo los valores del contexto al valor por default

        id: "",
        element: "/img/waterCont.png",
        elementAtmos: "img/waterContAtmos.png",
        sizePlanet:65,
        sizeAtmosphere:65,
        senseRotation:"normal",
        velRotation:165,

      });


    }

    if (edition===2) { //pero si venimos de un planeta viejo...

      const chosen = globalContext.planetList.findIndex((elem) => { //aquí recorro el arreglo de planetas buscando si algún valor id de un objeto contenido en el arreglo
        return elem.id === globalContext.config.id;// tiene el mismo valor del id del contexto actual

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