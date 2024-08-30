import { useContext, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { customCount, EvenSelector } from "./Store/atoms/count";

export default function App(){
    const [count, setCount] = useState(0);

    return (
        <div>
          <RecoilRoot>
            <Count />  
            <EvenRender />
          </RecoilRoot>      
        </div>
    )
}

function Count(){
    console.log("re-render");
    
    return <div>
        <RenderCount />
        <Btns />
    </div>
}

function EvenRender(){
  let isEven = useRecoilValue(EvenSelector);
  return <div>
    {isEven ? "It is Even" : null}
  </div>
}

function RenderCount(){
    let count = useRecoilValue(customCount);
    return <div>
      {count}
    </div>
}

function Btns(){
    const setCount = useSetRecoilState(customCount)
    console.log("btns re-render");

    return <div>
        <button onClick={() => setCount(count => count+1) }>Increment</button>
        <button onClick={() => setCount(count => count-1)}>decrement</button>
    </div>
}