import React, { useEffect, useState } from 'react'
import "./Stopwatch.css"
const Stopwatch = () => {

    const [state,setState]=useState(false);
    const [reading,setReading]=useState(0)


    useEffect(() => {
      let interval;


      if(state===true){
      interval=setInterval(() => {

        setReading((pre=>pre+1))
        
      },1000);
    }
    else{
        clearInterval(interval)
    }

    return ()=>{
        clearInterval(interval)
    }
    
    }, [state])



    const handleStart=()=>{
        setState(true)

    }
    
    const handlePause=()=>{
            setState(false)
    }
    
    const handleReset=()=>{
        setState(false)
        setReading(0)
    }
  return (
    <div className='parent'>
      <h1>Stopwatch App</h1>
        <br />
      <h2>Timer : {reading}</h2>
        <br />
      <button disabled={state===true} onClick={handleStart} className='btn'>Start</button>
      <button disabled={state===false} onClick={handlePause} className='btn'>Pause</button>
      <button disabled={reading===0} onClick={handleReset} className='btn'>Reset</button>

    </div>
  )
}

export default Stopwatch
