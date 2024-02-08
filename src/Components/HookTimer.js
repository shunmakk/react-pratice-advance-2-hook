import React from 'react'
import { useEffect, useState } from 'react'
import './HookTimer.css'

const HookTimer = ({init}) => {
 
    const [count, setCount] = useState(init);

    useEffect(() => {
        //タイマーを準備
        const t = setInterval(() => {
         setCount(c => c - 1);
        },1000);
        //コンポーネント破棄時にタイマーも破棄
        return () => {
            clearInterval(t);
        }
    },[])

  return (
    //   カウンタが0未満になった場合、WARNを適用
    <div className={count< 0 ?'warn' : ''}
    >現在のカウント:{count}</div>
  )
}

export default HookTimer