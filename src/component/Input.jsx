import React from 'react'
import Attach from '../attach.png'
function Input() {
  return (
    <div className="input">
      <input type='text' placeholder='type something...' />
      <div className="send">

        <label for="file-input">

        <img src={Attach} alt=" " />
        </label>

        <input id="file-input" type="file" />







        {/* <lable for="file-attach"> */}

        {/* <img src={Attach} alt=" " />
        </lable>
        <input type="file" style={{ disply: "none" }} id="file" />
      
      <label for="file-photo"></label>
        
          <img src={Attach} alt=" " /> */}
        {/* </label> */}
        <button>send</button>
      </div>
    </div>
  );
};

export default Input
