import React from 'react';
const FRinput = React.forwardRef((props,ref)=> {
    return (
        <div>
            <input type="text" ref={ref} ></input>
        </div>
      );
}) 
 
export default FRinput;