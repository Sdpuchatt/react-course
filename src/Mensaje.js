import {useState} from 'react';
export function Mensaje (){
    const [mensaje,setMensaje] = useState("");
    return <>
        <input onChange={(e)=>{
            console.log(e.target.value)
            setMensaje(e.target.value)
        }}/>
        <button onClick={()=>{
            alert("El mensaje es "+ mensaje)
        }}>Save</button>
    </>
}