export function Button(prop){
 return <>
    <button onClick={function(){console.log("Hola")}}>
        {prop.nombre}
    </button>
 </>
}