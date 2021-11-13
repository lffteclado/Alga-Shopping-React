import React, { useState } from "react";
/*Forma obsoleta de trabalhar com o redux*/
/*import { connect } from 'react-redux'*/
/*Forma mais recente de trabalhar com Redux*/
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../../store/Calculator/Calculator.action'

export default function Calculator() {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.calculator)

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return <>
        <input
            type="number"
            placeholder="a"
            value={a}
            onChange={(e) => setA(Number(e.target.value))} />
        <input
            type="number"
            placeholder="b"
            value={b}
            onChange={(e) => setB(Number(e.target.value))} />
        <button
            onClick={() => dispatch(sum(a, b))}
        >somar</button>
        <button
            onClick={() => dispatch(subtract(a, b))}
        >subtrair</button>
        <div>
            {result}
        </div>
    </>
}

/*function mapStateToProps(state){
    return{
        result: state.calculator
    }
}
Forma antiga de trabalhar com o Redux
export default connect(mapStateToProps)(Calculator)*/