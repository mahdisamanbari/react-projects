import React, { useState } from 'react'
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
function Question({id,title,text}) {
    const[showInfo,setShowInfo]=useState(false)
  return (
    
   <div className="question">
    <header>
        <h4>{title}</h4>
        <button onClick={()=>setShowInfo(!showInfo)}>
            {showInfo ? <FaMinusCircle/>  : <FaPlusCircle/> }
            
        </button>

    </header>
    { showInfo && <p>{text}</p>}
    
   </div>
  )
}

export default Question