import Controller from "./component/Controller";
import DrumPad from "./component/DrumPad";

function App() {
  return (
    
    <div className="App" id="drum-machine">
       <DrumPad />
       <Controller />
    </div>
    
  );
}

export default App;
