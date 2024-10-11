import BTN from "./btn";

export default function ALLptn(){
    return<div style={{width:"300px",border:"solid 2px teal", margin:"20px",padding:"10px",}}>
         <BTN title="مقالات الاسبوع">
         <div style={{color:"gold", display:"inline",margin:"3px"}}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
         </div>
         </BTN>
        <BTN title="الاكثر قراءه">
            <div>
                <img src={require("../logo192.png")}alt="" style={{width:"90px",margin:"3px",backgroundColor:"#e0e4ff",borderRadius:"10px",padding:"3px"}}></img>
            </div>
        </BTN>
        <BTN title="مميز">
            <div style={{color:"gold",margin:"10px 5px"}}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <img src={require("../logo192.png")}alt="" style={{width:"90px",margin:"3px",backgroundColor:"#e0e4ff",borderRadius:"10px",padding:"3px"}}></img>
        </BTN>
        <BTN >   
        </BTN>
    </div>
};