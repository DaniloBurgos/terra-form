import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import { Home } from '../Home/Home';
import { ElementPicker } from '../ElementPicker/ElementPicker';
import { DiameterPicker } from '../DiameterPicker/DiameterPicker';
import { RotationPicker} from "../RotationPicker/RotationPicker";
import { Galery } from '../Galery/Galery';
import { PlanetContext } from '../../utils/PlanetContext';


function App() {

  const [planetList, setPlanetList] = React.useState([

/*

    {
      id: "static1",
      element: "/terra-form/img/waterCont.png",
      elementAtmos: "/terra-form/img/waterContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id:"static2",
      element: "/terra-form/img/fireCont.png",
      elementAtmos: "/terra-form/img/fireContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static3",
      element: "/terra-form/img/waterIsland.png",
      elementAtmos: "/terra-form/img/waterIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static4",
      element: "/terra-form/img/fireIsland.png",
      elementAtmos: "/terra-form/img/fireIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },

    {
      id: "static5",
      element: "/terra-form/img/waterCont.png",
      elementAtmos: "/terra-form/img/waterContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id:"static6",
      element: "/terra-form/img/fireCont.png",
      elementAtmos: "/terra-form/img/fireContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static7",
      element: "/terra-form/img/waterIsland.png",
      elementAtmos: "/terra-form/img/waterIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static8",
      element: "/terra-form/img/fireIsland.png",
      elementAtmos: "/terra-form/img/fireIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },

    {
      id: "static9",
      element: "/terra-form/img/waterCont.png",
      elementAtmos: "/terra-form/img/waterContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id:"static10",
      element: "/terra-form/img/fireCont.png",
      elementAtmos: "/terra-form/img/fireContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static11",
      element: "/terra-form/img/waterIsland.png",
      elementAtmos: "/terra-form/img/waterIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static12",
      element: "/terra-form/img/fireIsland.png",
      elementAtmos: "/terra-form/img/fireIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },

    {
      id:"static13",
      element: "/terra-form/img/fireCont.png",
      elementAtmos: "/terra-form/img/fireContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static14",
      element: "/terra-form/img/waterIsland.png",
      elementAtmos: "/terra-form/img/waterIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static15",
      element: "/terra-form/img/fireIsland.png",
      elementAtmos: "/terra-form/img/fireIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },

*/
  ]);


  React.useEffect(()=>{ //leo el local storage sólo al inicio de la aplicación

    const listString = localStorage.getItem("list");

    if (listString !== null){

      setPlanetList(JSON.parse(listString));

    }



  },[]);


  React.useEffect(()=>{ //steo el local storage cada vez que la lista de planetas cambia

    localStorage.setItem("list", JSON.stringify(globalContext.planetList));

    console.log("seteo el local");

  },[planetList]);


  const [config, setConfig] = React.useState({

    id: "",
    element: "/terra-form/img/waterCont.png",
    elementAtmos: "/terra-form/img/waterContAtmos.png",
    sizePlanet:65,
    sizeAtmosphere:65,
    senseRotation:"normal",
    velRotation:165,

  });

  const globalContext = {

    config: config,
    setConfig: setConfig,
    planetList: planetList,
    setPlanetList: setPlanetList

  }


  return (
    <div className="App">

      <PlanetContext.Provider value={globalContext}>

        <HashRouter>

          <Route path="/" exact component={Home} />
          <Route path="/elementPicker" exact component={ElementPicker} />
          <Route path="/diameterPicker" exact component={DiameterPicker} />
          <Route path="/rotationPicker" exact component={RotationPicker} />
          <Route path="/galery" exact component={Galery} />


        </HashRouter>


      </PlanetContext.Provider>



    </div>
  );
}

export default App;
