import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
      element: "/img/waterCont.png",
      elementAtmos: "img/waterContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id:"static2",
      element: "/img/fireCont.png",
      elementAtmos: "img/fireContAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static3",
      element: "/img/waterIsland.png",
      elementAtmos: "img/waterIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
    {
      id: "static4",
      element: "/img/fireIsland.png",
      elementAtmos: "img/fireIslandAtmos.png",
      sizePlanet:65,
      sizeAtmosphere:65,
      senseRotation:"normal",
      velRotation:165,
    },
*/
  ]);


  const [config, setConfig] = React.useState({

    id: "",
    element: "/img/waterCont.png",
    elementAtmos: "img/waterContAtmos.png",
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

        <BrowserRouter>

          <Route path="/" exact component={Home} />
          <Route path="/elementPicker" exact component={ElementPicker} />
          <Route path="/diameterPicker" exact component={DiameterPicker} />
          <Route path="/rotationPicker" exact component={RotationPicker} />
          <Route path="/galery" exact component={Galery} />


        </BrowserRouter>


      </PlanetContext.Provider>



    </div>
  );
}

export default App;
