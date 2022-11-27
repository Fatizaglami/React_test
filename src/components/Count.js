import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './count.css'


function Count(){

var [increment, setIncrement] = useState(0);
const [colorText, setColorText] = useState("black");

//function to increase 
const increase = () => {
  var  increment1 = increment+1;
    setIncrement(increment1);
    changeColor(increment1);
  };

  //function to decrease
  const decrease = () => {
    var increment2 = increment-1;
    setIncrement(increment2);
    changeColor(increment2);
    
  };

  //function to change the color
function changeColor(increment){
    if(increment  < 0){
             setColorText("red");
            }else if(increment > 0){
                setColorText("blue");
            }else if (increment === 0){
                setColorText("black")
            }
            
}

   
    return(
<div>
  <p className='number' style={{ color: colorText}} >{increment}</p>
  <button onClick={decrease}  class="btn btn-danger">-</button>
  <button onClick={increase}  class="btn btn-primary">+</button>
</div>
    )
}
export default Count
