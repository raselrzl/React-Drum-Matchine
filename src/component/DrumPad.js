import React, { useState, useEffect } from "react";

export default function DrumPad() {
  return <div id="display">
     <div>
      <button className='drum-pad' id="Q">Q</button>
      <button className='drum-pad' id="W">W</button>
      <button className='drum-pad' id="E">E</button>
      </div>
      <div>
      <button className='drum-pad' id="A">A</button>
      <button className='drum-pad' id="S">S</button>
      <button className='drum-pad' id="D">D</button>
      </div>
      <div>
      <button className='drum-pad' id="Z">Z</button>
      <button className='drum-pad' id="X">X</button>
      <button className='drum-pad' id="C">C</button>
      </div>
  </div>;
}
