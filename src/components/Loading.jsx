import React from 'react'
import {TailSpin, Grid} from 'react-loader-spinner'


export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <TailSpin type="Puff" color="#00BFFF" height={550} width={80}/>
        {/* <Grid color="#00BFFF" height={80} width={80} /> */}
        
    </div>

   )
}
