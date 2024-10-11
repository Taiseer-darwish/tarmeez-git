import "../TagButtonStyle.css";
export default function BTN({title="click me",children="👉🏻"}){
    return<button className="btnStyle">
        {title}
        {children}
        </button>
}