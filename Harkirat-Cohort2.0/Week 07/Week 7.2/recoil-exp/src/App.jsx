import { useContext, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { customCount } from "./Store/atoms/count";

export default function App(){
    const [count, setCount] = useState(0);

    return (
        <div>
          <RecoilRoot>
            <Count />  
          </RecoilRoot>      
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
    let count = useRecoilValue(customCount);
    return <div>
        {count}
    </div>
}

function Btns(){
    let [count, setCount]= useRecoilState(customCount)
    return <div>
        <button onClick={() => setCount(count+1) }>Increment</button>
        <button onClick={() => setCount(count-1)}>decrement</button>
    </div>
}