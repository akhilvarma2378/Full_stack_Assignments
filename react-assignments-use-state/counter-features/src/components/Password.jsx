export function Password(props){
    if(props.value)
        return <div>
            <input type="text" /><br /><br />
            <button onClick={()=>{props.func(!props.value)}}>Hide</button>
        </div>
    else
        return <div>
            <input type="password" /><br /><br />
            <button onClick={()=>{props.func(!props.value)}}>Show</button>
        </div>
}