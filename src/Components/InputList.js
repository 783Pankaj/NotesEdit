import React, { useState } from "react";

const InputList=(props)=>{
     const [edit, setEdit] = useState(false);
     let viewMode ={};
     let editMode = {};
     if(edit){
        viewMode.display = 'none';
     }else{
        editMode.display ="none"
     }
    // console.log(props.item)
    const editFun=()=>{
        setEdit("true");
    }
    
    return(
        <div>
              <p>
                {props.item} 
                <button onClick={editFun}>Edit</button> 
                
                <input type="text"
                 value={props.item}
                
                 style={editMode}
                 onChange={(e)=>console.log(e.target.value)}
                /> 
                
              </p>
        </div>
    );
}
export default InputList;