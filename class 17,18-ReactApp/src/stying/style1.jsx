import React from 'react'

export default function Style1() {

        let internalCss={
            color:"black",
            background:"red",
        }

  return (
    <div>
        <h1 style={{color:"white", fontSize:"37px", background:"gray"}}>This is inline CSS</h1>

        <h1 style={internalCss}>This is internal Css </h1>

        <h1 className='color1' >This is external Css</h1>
        
        <button className='btn1'>click</button>

    </div>

  )
}
