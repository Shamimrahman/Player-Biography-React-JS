import React from 'react'
import Data from './Data'
import Gallary from './Gallary'

const Messi=()=>
{
    return (

        <Gallary key={Data[0].id} imgsrc={Data[0].imgsrc} h={Data[0].h} p={Data[0].p}>

        </Gallary>

    )
}

export default Messi;