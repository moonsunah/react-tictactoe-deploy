import React, {useState} from 'react';
import Square from './Square';
import "./Board.css";

const Board = ({squares, onClick}) => {


    // constructor(props){  
    //     super(props);
    //     this.state={  //9개의 사각형에 해당하는 9개 null배열을 초기 state로 설정
    //         squares : Array(9).fill(null)
    //     };
    // }

   // const [squares, setSquares] = useState(Array(9).fill(null));  //getter: squares, setter: setSquares
    //const [xIsNext, setXIsNext]= useState(true);


    //board에 재정의
    // const handleClick = (i) => {  //함수도 자녀한테 내려줄 수 있음
    //     const newSquares = squares.slice(); //state 복제할때 slice()사용
    //     if(calculateWinner(newSquares) || newSquares[i]){//return 값이 나왔거나 newSquares[i] 에 null이 아니면(클릭했으면)
    //         return;
    //     }

    //     newSquares[i] = xIsNext ? 'X' : 'O';
    //     setSquares(newSquares);
    //     setXIsNext(previousState =>!previousState); // setXIsNext(!xIsNext); 도 되지만 조금 다름

    // }


    const renderSquare= (i) => { //함수만든것
        return <Square value={squares[i]} 
        onClick={()=> onClick(i)} />  //handleClick함수를 onClick이라는 이름으로 내려줌
    }



    return (
        <div>
            
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

        </div>
    )
    
}

export default Board;