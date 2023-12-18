import React, { useContext, useEffect } from 'react'
import MyContext from './MyContext'

function Questions() {
  const {data,currentQuestion,setCurrentQuestion } = useContext(MyContext)

  const handleNextChange =()=>{
           if(currentQuestion < data.length -1){
            setCurrentQuestion(currentQuestion + 1)
           
           }
         }
       const handlePrevChange =()=>{
        if(currentQuestion > 0){
          setCurrentQuestion(currentQuestion - 1)
        }
       }
     const currentQues = data[currentQuestion]
  return (
    <div>
      <h2>Quiz Competitionzz</h2>
      <br></br>
    
      {currentQues && (
          <>
           <h5>Question number : {currentQues.id}</h5>
           <h3> {currentQues.question}</h3>
           <div>
            <input 
              type='radio'
              name={currentQues.option_1}
              value={currentQues.option_1}
            />
            <label htmlFor={currentQues.option_1}>{currentQues.option_1}</label>
            <br></br>
            <input 
              type='radio'
              name={currentQues.option_2}
              value={currentQues.option_2}
            />
            <label htmlFor={currentQues.option_2}>{currentQues.option_2}</label>
            <br></br>
            <input 
              type='radio'
              name={currentQues.option_3}
              value={currentQues.option_3}
            />
            <label htmlFor={currentQues.option_3}>{currentQues.option_3}</label>
            <br></br>
            <input 
              type='radio'
              name={currentQues.option_4}
              value={currentQues.option_4}
            />
            <label htmlFor={currentQues.option_4}>{currentQues.option_4}</label>
            <br></br>
           </div>
           </>
           
      )}
  <button onClick={handlePrevChange} >Prev</button>
         <button  onClick={handleNextChange} >Next</button>
      
       
    </div>
  )
}

export default Questions



