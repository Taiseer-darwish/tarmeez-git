import { Link } from "react-router-dom"
export default function Hello(){
    return(
        <>
        <h1>Hello Page</h1>
        <Link to={"/home"}>
        <h1 style={{background:"orange",padding:"10"}}>back to home</h1>
        </Link>
        </>
    )
}