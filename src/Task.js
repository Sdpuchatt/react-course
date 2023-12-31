export function TaskCard({flag}){
    const red = {background:"red"};
    const green = {background:"green"};
    return <div style = {{background:"#000000",color:"#fff", width: "33%"}}>
        <h1>Mi primer titulo</h1>
        
        <p style={flag ? green : red}> {flag?"primera tarea realizada":"Falta realizar la tarea"}</p>
    </div>
}