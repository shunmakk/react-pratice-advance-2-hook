import React, { useEffect, useState } from 'react'

const StateEffect = ({init}) => {
  
    const [count, setCount] =  useState(init);
    const [hoge,setHoge] =  useState('hoge');

    //state値(count)が変化した場合のみログを表示
    useEffect(() => {
      console.log(`count is ${count}.`)
    },[count]);

    const handleClick = () => setCount(count + 1);

  return (
    <>
    {/* ボタンにタイムスタンプ値を更新 */}
    <button onClick={() => setHoge(Date.now())}>hoge ({hoge})</button>
    <button onClick={handleClick}>クリック</button>
    <p>{count}回、クリックされました。</p>
    </>
  )
}

export default StateEffect