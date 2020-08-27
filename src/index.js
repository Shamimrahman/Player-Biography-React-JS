import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import Gallary from './Gallary'
import Para from "./Para"
import Player from './App'


let mdata=(value)=>
{
  return(

  <Gallary imgsrc={value.imgsrc} h={value.h} p={value.p}>


  </Gallary>

  )

}
ReactDOM.render(

<>

<h2>Players Biography</h2>

{Data.map(mdata)}

<Player></Player>


</>,

document.getElementById('root')


)