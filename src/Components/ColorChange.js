import {useState} from 'react';
function ColorChange(){
    const [color,setColor] = useState("orange")

    function greenBtn(){
        console.log('greenBtn clicked')
        setColor('green')
    }
    function redBtn(){
        console.log('redBtn clicked')
        setColor('red')
    }
    function yellowBtn(){
        console.log('yellow btn clicked')
        setColor('#FFFF00')
    }
    return(
        <div>
            <h1>Home Page</h1>
            <div style={{backgroundColor:color}}>
                <h3>Color: {color}</h3>
                <button onClick={greenBtn}> change to green</button>
                <button onClick={redBtn}> change to red</button>
                <button onClick={yellowBtn}>change to yellow</button>

            </div>
        </div>
        
    )
}
export default ColorChange