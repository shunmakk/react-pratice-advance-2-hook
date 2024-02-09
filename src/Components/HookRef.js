import { useState, useRef } from "react"

const HookRef = () => {
 
const id = useRef(null);
const [count,setCount] = useState(0);

const handleStart = () => {
    if(id.current === null){
        id.current =  setInterval(() => setCount(c => c + 1),1000)
    }
};

const handleEnd = () => {
    clearInterval(id.current)
    id.current = null;
}
 

const reset = () => {
    clearInterval(id.current)
    id.current = null;
    setCount(0);
}



  return (
    <div>
       <h3>useRef関数を使ってタイマーが正常に動作するようにする</h3>
       <button onClick={handleStart}>開始</button>
       <button onClick={handleEnd}>ストップ</button>
       <button onClick={reset}>リセット</button>
       <p>{count}秒経過</p>
    </div>
  )
}

export default HookRef