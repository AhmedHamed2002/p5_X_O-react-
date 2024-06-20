import '../App.css' ; 
function Square(props) {
    const clickBox = (cell_ID) =>  {
        const  taken  =  ((props.cells[cell_ID]==="") ? 1 : 0)   ;
        if(props.winner) return ; 
        if(taken)
        {
            if(props.go==="circle")
            {
                handelGO("circle" , cell_ID) ;
                props.setGo("cross") ; 
            }
            else 
            {
                handelGO("cross" , cell_ID) ; 
                props.setGo("circle") ; 
            }
        }
    }
    const handelGO = (text , ID) => {
        let newCells =  [...props.cells] ; 
        newCells[ID]= text;  
        props.setCells(newCells) ; 
        }
    return(
        <div key={props.id} className="square" onClick={() => clickBox(props.id)}>
            <div className={props.cell}>{props.cell ?(props.cell === "circle" ? "O" : "X" ) : ""}</div> 
        </div>
    ) ; 
}

export default Square  ;  