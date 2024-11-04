import { Link } from "react-router-dom";

export default function NotFond(){
    return(
        <>
        <h1>404 (Not Fond)</h1>
        <p>This page Not deFinde</p>
        <Link to={"/home"}>
        <button>back Home</button>
        </Link>
        </>
    )
}