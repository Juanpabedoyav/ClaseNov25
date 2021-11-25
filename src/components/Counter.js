import { Button } from '@chakra-ui/button'
import React, { useReducer } from 'react'
import { counterReducer, init, initialState } from '../reducers/counterReducer'
import { types } from '../types/types'

const Counter = () => {
// const [counter, setCounter] = useState({
//     counter1: 10,
//     counter2: 20,
//     counter3:30,
//     counter4:40,
// })

const [counter, dispatch] = useReducer(counterReducer, initialState, init)


// const {counter1} =counter
    return (
        <div>
            <h1>counter : {counter}</h1>
            <hr/>
            <Button colorScheme="green" onClick={()=>{
                dispatch({type: types.increment})

            }} >Incremento</Button>
            <Button colorScheme="blue" onClick={()=>{
                                dispatch({type: types.decrement})

            }}>Decremento</Button>

            <Button colorScheme="red" onClick={()=>{
                                dispatch({type: types.reset})

            }}>Reset</Button>
        </div>
    )
}

export default Counter
