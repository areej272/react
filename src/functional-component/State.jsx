
// rfc - react functional Component
// rfce - react function export component
//rafce - react arrow functional export component
//rafc - react arrow functional component

import { useState } from "react";


const State = () => {
    const [time,setTime] = useState(0); //initial state is 0

    // timer increment function
    const incrementTimer = () => {
        setTime(time + 1);
    }

  return (
    <div>
      <h1>Time: {time} seconds</h1>
      <button onClick={incrementTimer}>Increment time....</button>
    </div>
  )
}

export default State

