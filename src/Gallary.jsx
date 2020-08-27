import React from 'react'
import Para from './Para'
import Data from './Data'

function Gallary(props){

return(


    <div>

<img src={props.imgsrc}>



</img>

<h3>
{props.h}
</h3>

<para>{props.p}</para>



</div>
)


}

export default Gallary