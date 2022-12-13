import React from "react";
import { useState } from "react";

const Table = () => {

    const [color, setColor] = useState('#000000');

    const onRowFill = () => {
        const numArr = [[1,2,3,4,5,6],
                        [7,8,9,10,11,12],
                        [13,14,15,16,17,18],
                        [19,20,21,22,23,24],
                        [25,26,27,28,29,30],
                        [31,32,33,34,35,36]],
        rowsArr = [];
        numArr.forEach(item => {
            rowsArr.push(Row(item, color))   
        });
        return rowsArr

        
    }

    const onHandleChange = (e) => {
        const value = e.target.value;
        setColor(value)
    }   

    const rows = onRowFill()

    return (
        <div className="color">
            <input className="palette" type="color" value={color} onChange={onHandleChange}/>
            <table>
                {rows}    
            </table>       
        </div>
    )
}

const Row = (numbers, color) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const onMouseOver = (e) => {
        const red = getRandomInt(255),
              green = getRandomInt(255),
              blue = getRandomInt(255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})` 
    }

    const onClick = (e) => {
        e.target.style.backgroundColor = `${color}` 
    }

    const onDblClick = (e) => {
        const parent = e.target.closest('tr')
        parent.style.backgroundColor = `${color}`
    }

    return(
        <tbody>
            <tr className="row" >
                {(numbers[0] === 1) ?
                <td key={numbers[0]} onClick={(e) => onClick(e)}
                                     onMouseOver={(e)=> onMouseOver(e)}
                                     onDoubleClick={(e) => onDblClick(e)}>{1}</td> :
                <td key={numbers[0]}>{numbers[0]}</td>}
                <td key={numbers[1]}>{numbers[1]}</td>
                <td key={numbers[2]}>{numbers[2]}</td>
                <td key={numbers[3]}>{numbers[3]}</td>
                <td key={numbers[4]}>{numbers[4]}</td>
                <td key={numbers[5]}>{numbers[5]}</td>
            </tr>
        </tbody>
    )
}

export default Table;