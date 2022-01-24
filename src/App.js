import Controller from "./component/Controller";
import DrumPad from "./component/DrumPad";

function App() {
  return (
    <div>
        <div id="drum-machine">
          <DrumPad />
        </div>
        <div>
          <Controller />
        </div>
    </div>
    
  );
}

export default App;
