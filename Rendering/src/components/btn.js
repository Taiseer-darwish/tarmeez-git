import "../TagButtonStyle.css";
export default function BTN({title="click me",icon="",img="", }){
    return<button className="btnStyle">
        <h3>{title}</h3>
        <div>{icon}</div>
        <div>{img}</div>
        </button>
}