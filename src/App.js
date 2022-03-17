import React, {useEffect, useState} from 'react';
import Street from './components/Street/Street';
import Territorios from './components/Territorios/Territorios';
import Resident from './components/Resident/Resident';
import './App.css';

function App() {
  const [street, setStreet] = useState("--no-street--");
  const [isTerr, setIsTerr] = useState(false);
  const [territorio, setTerritorio] = useState(["none"]);

  useEffect(()=>{
    console.log(territorio)
  }, [territorio])

  
  return (
    <div className="App">
      <header className="App-header">
        {isTerr ? 
          <><Street setStreet={setStreet} isTerr={isTerr} territorio={territorio}/>
          <Resident street={street}/></> : 
          <Territorios setTerritorio={setTerritorio} setIsTerr={setIsTerr} />}
      </header>
    </div>
  );
}

export default App;
