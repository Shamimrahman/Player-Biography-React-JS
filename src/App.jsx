import React from 'react';
import Messi from "./Messi"
import Lewa from "./Lewa"
import Gallary from './Gallary'

let favplayer="Messi"

function player()
{
  

    if(favplayer=="Messi")

    {
       return(
           <Messi></Messi>
   
       )
    }
    else{

        return(
            <Lewa></Lewa>
        )
       
    }


  

}

export default player;