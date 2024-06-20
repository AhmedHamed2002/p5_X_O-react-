import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';
const win = [
  [0,1,2] ,  
  [3,4,5] ,  
  [6,7,8] ,  
  [0,3,6] ,  
  [1,4,7] ,
  [2,5,8] ,
  [0,4,8] , 
  [2,4,6]
];  

function App() {
  
  const [cells , setCells] =  useState(['','','','','','','','','']) ; 
  const[go ,  setGo] =  useState("circle") ;
  const [winner  , setWinner]  =  useState("") ;  
  
  let Draw = () => {
    let flag = 1  ; 
    for (let  i =0  ; i<9 ; i++)
    {
      if(cells[i] === '') flag =0  ;  
    }
    return flag ; 
  }
  
  useEffect(()=>{
    win.forEach((e) => {
      const circle_win =  e.every((i) => cells[i] === "circle") ; 
      const cross_win =  e.every((i) => cells[i] === "cross") ; 
      if(circle_win)
      {
        setWinner("circle is winner")  ; 
      }
      else if (cross_win)
      {
        setWinner("cross is winner")  ;  
      }
      else if(Draw())
      {
        setWinner("Draw")  ; 
      }
    });
  },[cells])
  return (
    <>
    <div className="container">
      <div className="box">
          {
            cells.map((cell , index) =>{
              return(
                <Square 
                cells={cells} 
                setCells={setCells}
                go={go} 
                setGo={setGo}
                id={index}
                cell={cell}
                winner={winner}
                />
              ) ;  
            })
          }
      </div>
    </div>
    <div className="winner">{winner? winner : ""}</div>
    <div className="turn">its now <span className={`${go}Turn`}>{go}</span> turn </div>
    </>
  );
}

export default App;
