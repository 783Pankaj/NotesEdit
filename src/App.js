import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import InputList from './Components/InputList';
function App() {
  const [dataList, setDataList] = useState([]);
 console.log(dataList)
  
  let addList =(inputText)=>{
    if(inputText!==""){
      
      setDataList([...dataList, inputText])
    }
    console.log(inputText)
  }
  
  
  return (
    <div>

      <Input addList={addList}/>
      <hr />
      {dataList.map((listItem,i)=>{
        return(
         < InputList key={i} index={i} item={listItem} />
        )
      })}
    </div>
  );
}

export default App;
