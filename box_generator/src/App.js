import logo from './logo.svg';
import { useState } from 'react';
import MakeBoxes from './components/MakeBoxes';
import PlaceBoxes from './components/PlaceBoxes';
import BoxStyle from './components/BoxStyle';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBoxToArray = e => {
    let newBox = {
      color: e,
    }
    setBoxes([...boxes, newBox]);
  }

  return (
    <>
        <MakeBoxes
          submitBox={addBoxToArray}
        />
      <div id="wrapper">
        <PlaceBoxes
          boxes={boxes}
        />
      </div>
    </>
  );
}

export default App;
