import {React, useState} from "react";
import  "./App.css";

function App() {
const [input, setInput] = useState("");
const [result, setResult] = useState("");

const handleClick = (value) =>{
 setInput((prev)=> prev + value);
};

const handleClear= () =>{
 setInput("");
 setResult("")
};
 const handledelete = () =>{
 setInput(input.slice(0,-1));
};

const calculate=()=>{
 try{
   setResult(eval(input).toString());
 }catch(error){
   setResult("error");
 };
};

 return (
   <>
   <div className= "cal">
   <div className="display">
    <input  type="text" value={input}/>
    <div className="result">{result}</div>
    </div>
    <div className="btn">
    <button onClick={()=>handleClick("0")}>0</button>
     <button onClick={()=>handleClick("1")}>1</button>
     <button onClick={()=>handleClick("2")}>2</button>
     <button onClick={()=>handleClick("3")}>3</button>
     <button onClick={()=>handleClick("4")}>4</button>
     <button onClick={()=>handleClick("5")}>5</button>
     <button onClick={()=>handleClick("6")}>6</button>
     <button onClick={()=>handleClick("7")}>7</button>
     <button onClick={()=>handleClick("8")}>8</button>
     <button onClick={()=>handleClick("9")}>9</button>
     <button onClick={handleClear}>clear</button>
     <button onClick={handledelete}>del</button>
     <button onClick={()=>handleClick("/")}>/</button>
     <button onClick={()=>handleClick("*")}>*</button>
     <button onClick={()=>handleClick("-")}>-</button>
     <button onClick={()=>handleClick("+")}>+</button>
     <button  className="equal" onClick={calculate}>=</button>
     <button className="zero" onClick={()=>handleClick("0")}>0</button>
    </div>
   </div>
   </>
);
}

export default App;
