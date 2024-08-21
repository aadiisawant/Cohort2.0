import React, { useMemo, useState } from 'react'

function UseMemoDemo() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    // const [sum, setSum] = useState(0);
    // function sumFun(){
    //     let s = 0;
    //     for(let i=1;i<=inputValue;i++){
    //         s +=i;
    //     }
    //     setSum(s)
    // }
    let sum = useMemo(()=>{
        let finalSum = 0;
        for(let i=1;i<=inputValue;i++){
            finalSum +=i;
        }
        return finalSum;
    }, [inputValue])
  return (
    <div>
      <input type="number" placeholder='Enter the no...' onChange={(e)=>{
        setInputValue(e.target.value);
        // sumFun();
      }} /> <br />
    <p>The Sum from 1 to {inputValue} is {sum}</p><br />
      <button onClick={() => setCount(count+1)}>Counter {count}</button>
    </div>
  )
}

export default UseMemoDemo
