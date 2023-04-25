import React from 'react';

const DeviceDetails = (props) => {
     return (
          <div>
               <p>This phone's price is: {props.price}</p>
          </div>
     );
};

export default DeviceDetails;