import { useContext, useState } from "react";
import { CounterContext } from "./Context";

export default function PropDemo(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <CounterContext.Provider value={{count,setCount}}>
                <Count />
            </CounterContext.Provider>    
        </div>
    )
}

function Count(){
    
    return <div>
        <RenderCount />
        <Btns />
    </div>
}

function RenderCount(){
    let {count}= useContext(CounterContext)
    return <div>
        {count}
    </div>
}

function Btns(){
    let {count, setCount}= useContext(CounterContext)
    return <div>
        <button onClick={() => setCount(count+1) }>Increment</button>
        <button onClick={() => setCount(count-1)}>decrement</button>
    </div>
}