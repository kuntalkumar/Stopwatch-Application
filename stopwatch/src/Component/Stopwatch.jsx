import React, { useEffect, useState } from 'react'
import "./Stopwatch.css"
const Stopwatch = () => {


const [hours,sethours]=useState(0)
const [minutes,setMinutes]=useState(0)
const [seconds,setSeconds]=useState(0)


    const [state,setState]=useState(false);
    
    // const [reading,setReading]=useState()


    if(seconds==60){
        setMinutes(minutes+1)
        setSeconds(0)
    }
    if(minutes==60){
        sethours(hours+1)
        setMinutes(0)
        setSeconds(0)
    }


    useEffect(() => {
      let interval;

      
  

      if(state===true){
      interval=setInterval(() => {

        

        setSeconds((pre=>pre+1))

        
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
        setSeconds(0)
        setMinutes(0)
        sethours(0)
    }
  return (

    <div className='outerDiv'>
 <div className='parent'>
      <h1>Stopwatch App</h1>
        <br />
       <div style={{border:"2px solid violet", padding:"10px", width:"60%", margin:"auto",borderRadius:"10px"}}>

       Timer : {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
       </div>
        <br />
        <br /><br />
      <button disabled={state===true} onClick={handleStart} className='btn'>Start</button>
      <button disabled={state===false} onClick={handlePause} className='btn'>Pause</button>
      <button  onClick={handleReset} className='btn'>Reset</button>

    </div>
    </div>
   
  )
}

export default Stopwatch
