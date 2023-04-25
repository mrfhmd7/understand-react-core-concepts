import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
     const [steps, setSteps] = useState(0);

     const increaseSteps = () => {
          const nextStep = steps + 1;
          setSteps(nextStep)
     }
     return (
          <div style={{
               border: '3px solid blue',
               margin: '15px',
               borderRadius: '10px'
          }}>
               <h2>This is my smart Watch!!</h2>
               <p>Step: {steps}</p>
               <button onClick={increaseSteps}>Walk</button>
               <Dial steps={steps}></Dial>
          </div>
     );
};

export default Watch;