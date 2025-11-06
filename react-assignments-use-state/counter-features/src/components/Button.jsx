export function Button(props){
    if(props.count<0){
        alert("Oops! Negative")
    }
    return (<div>
        <button>Counter {props.count}</button>
    </div>);
}