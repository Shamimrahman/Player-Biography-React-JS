import React from 'react'
import Data from './Data'
import Gallary from "./Gallary"

const Lewa=()=>{

    return(

        <Gallary key={Data[2].id} imgsrc={Data[2].imgsrc} h={Data[2].h} p={Data[2].p}>


        </Gallary>




    )


}

export default Lewa;