 import { useState } from "react"
function Count(){
    const [wordsCount,setWordsCount] = useState(0)
    const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    totalWords();
   
    function totalWords(){
        const total = paragraph.split(' ').length
        setWordsCount(total)
    }

  
    return (
        <div>
            <p>{paragraph}</p>
            <button onClick={totalWords}>click</button>
                <h3>Total No.of words : {wordsCount}</h3>
                
        </div>
        

    )

}
export default Count
