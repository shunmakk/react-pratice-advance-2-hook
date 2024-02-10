import React from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { counterAtom } from '../Store/atom'

const RecoilCounter = () => {

    //recoil下の値のセッターを取得
    const [counter, setCounter] = useRecoilState(counterAtom);

    //カウンターをリセット
    const  resetCounter = useResetRecoilState(counterAtom);

    const handleClick = () => setCounter(c => c + 1)
  return (
      <>
    <button onClick={handleClick}>クリック</button>
    <button onClick={() => resetCounter()}>リセット</button>
    <p>{counter}回クリックされました。</p>
    </>
  )
}

export default RecoilCounter