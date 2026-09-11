import data from "./data"
import './App.css'
import Question from './Question'
import { useState } from "react"

function App() {
  const[questions , setQuestion]=useState(data)
  console.log(questions)

  return (
    
    <div className="container">
      <h3>Do you have a question ?</h3>
      <div className="info">
        {
          questions.map(question =>{
            return <Question {...question}/>
          })
        }
        
      </div>

    </div>
   
  
   
  )
}

export default App
