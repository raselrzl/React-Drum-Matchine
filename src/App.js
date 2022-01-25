import Controller from "./component/Controller";
import DrumPad from "./component/DrumPad";



function App() {
  const play=(id)=>{
    const audio=document.getElementById(id)
    audio.currentTime=0;
    audio.play()  
  }
  return (
    <div id="drum-machine">
        <div  id="display">
          <DrumPad play={play}/>
        </div>
        <div>
          <Controller />
        </div>
    </div>
    
  );
}

export default App;
