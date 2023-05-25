import React from "react"
import "./Square.css"



const Square =({onClick, value})=> {
//export default class Square extends React.Component{ 

    // constructor(props){  //게임 상태를 유지할 필요 없기 때문에 지우기
    //     super(props);
    //     this.state={
    //         value:null,
    //     }
    // }


   
        return ( //버튼 클릭하면 onclick이벤트 핸들러 호출
            <button className="square" 
            onClick={onClick}>  
                {value}
            </button>
        )
    
}

export default Square;