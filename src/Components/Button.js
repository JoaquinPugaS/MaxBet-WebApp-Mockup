import "../Css/Button.css"


export function Button(props){
    return(
        <button className="Button" type={props.type} >{props.Text}</button>
    );
}