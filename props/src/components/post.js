export default function Post({Name="no name",Content="no content",children=""}){
    return<div>
        <div style={{textAlign:"center",border:"solid 2px teal",margin:"20px",padding:"20px"}}>
        <h4>{Name}</h4>
        <h4>{children}</h4>
        <hr></hr>
        <p>{Content}</p>
    </div>
    </div> 
}