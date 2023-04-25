import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
     return (
       <div
         style={{
           border: "3px solid tomato",
           margin: "15px",
           borderRadius: "5px",
         }}
          >
               <h3>This is dial component</h3>
               <p>You Steps count: {props.steps}</p>
               <Knob steps={props.steps}></Knob>
       </div>
     );
};

export default Dial;