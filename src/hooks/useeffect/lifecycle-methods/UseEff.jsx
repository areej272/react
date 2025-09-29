import React, { useEffect, useState } from 'react'

const UseEff = () => {
  const [seconds,setSeconds] = useState(0);

    useEffect(() => {

      const intervel = setInterval(()=>{
        setSeconds((s) => s + 1);
      },1000);

      return () => clearInterval(intervel);

    },[])
    
  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  )
}

export default UseEff
