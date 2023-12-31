import {useState} from 'react'
export function Counter(){
    const [count, setCounter] = useState(0);
    return <>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCounter(count+1)
        }}>Sumar</button>

        <button onClick={()=>{setCounter(count-1)}}>Restar</button>
        <button onClick={()=>{setCounter(0)}}>Reiniciar</button>
        <br></br>

    </>
}