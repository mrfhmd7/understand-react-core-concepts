import React, { useEffect, useState } from 'react';

const Watch = () => {
     const [steps, setSteps] = useState(0);

     const increaseSteps = () => {
          const nextStep = steps + 1;
          setSteps(nextStep)
     }
     return (
          <div>
               <h2>This is my smart Watch!!</h2>
               <p>Step: {steps}</p>
               <button onClick={increaseSteps}>Walk</button>
          </div>
     );
};

export default Watch;