import React from 'react';

const Knob = (props) => {
     return (
       <div
         style={{
           border: "3px solid green",
           margin: "15px",
           borderRadius: "5px",
         }}
       >
         <h4>This is Knob component</h4>
         <p>Steps here is: {props.steps}</p>
       </div>
     );
};

export default Knob;