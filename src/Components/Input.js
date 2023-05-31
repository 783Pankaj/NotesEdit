import React, { useState } from "react";

const Input=(props)=>{
    const [data, setData] = useState("");
     console.log(data)
    return(
        <div>
            <center>
            <input type="text" placeholder="enter your data" value={data} onChange={e=>{setData(e.target.value)}}/>
            <button type="submit" onClick={()=>{props.addList(data)
                setData("")}}>Enter</button>
                {/* <button>edit</button> */}
            </center>
            <form>

            </form>
        </div>
    );
}
export default Input;