import BTN from "./btn";
import {BTNData} from "../BTNData"

export default function ALLptn(){

    const showBTNData=BTNData.map((el) => <BTN key={el.id}  title={el.title} icon={el.icon} img={el.img} />)
    return<div style={{width:"300px",border:"solid 2px teal", margin:"20px",padding:"10px",}}>
        {showBTNData}
    </div>
};