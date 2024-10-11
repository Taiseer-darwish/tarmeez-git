export default function Post({name="no name",Content="no content"}){
    return<div>
        <div style={{textAlign:"center",border:"solid 2px teal",margin:"20px",padding:"20px"}}>
        <h4>{name}</h4>
       
        <hr></hr>
        <p>{Content}</p>
    </div>
    </div> 
}