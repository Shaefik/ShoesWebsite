 import {useState} from 'react'
function SearchWord(){
    const [words,setWords] =useState('')
    const [searchWord,setSearchWord] = useState('')
    const [replace,setReplace]= useState('')
    const [result,setResult]=useState('')
    
    const handleSearch =()=>{
         const replaced = words.split(searchWord).join(replace)
        setResult(replaced)
        setWords(replaced)
    }
      
      
    return (
        <div>
            <p>Enter Text</p>
            <input onChange={(e)=>setWords(e.target.value)}  value={words} style={{width: '300px', height: '180px'}} type="text" /> 
            <p>Enter word to search</p>
            <input onChange={(e)=>setSearchWord(e.target.value)} value={searchWord} type="text" /> 
           
            <p>Enter word to replace</p>
            <input onChange={(e)=>setReplace(e.target.value)} value={replace} type="text" />
            <button  onClick={handleSearch} >Submit</button>
            <p>Result</p>
            <div >
               {result}
            </div>
        </div>

    )
}
export default SearchWord




