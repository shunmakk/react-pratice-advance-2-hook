import { useCallback, useMemo, useState } from "react";
import { Mybutton } from "./HookMemoChild";
import { Mycounter } from "./HookMemoChild";


//引数delayだけ処理を休止するコード
const sleep = delay => {
    const start = Date.now();
    while (Date.now() - start < delay);
}

const HookMemo = () => {
  
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    //mybuttonに渡すハンドラー
    const increment = useCallback(() => setCount1(c => c + 1),[]);
    const decrement = useCallback(() => setCount2(c => c - 1),[]);

    //count1に100を加えた値を算出するコード
    const heavyProcess = useMemo(() => {
        sleep(1000);
        return count1 + 100;
    },[count1])

  return (
   <>
   {/* 個を1個ずツインクリメントするカウンター */}
   <div>
    <Mybutton id="btn1" handleClick={increment}>カウントアップ</Mybutton>
    <Mycounter id="c1" value={count1}/>
    {heavyProcess}
   </div>
    {/* 個を1個ずデクリメントするカウンター */}
    <div>
    <Mybutton id="btn2" handleClick={decrement}>カウントダウン</Mybutton>
    <Mycounter id="c2" value={count2}/>
    </div>
   </>
  )
}

export default HookMemo