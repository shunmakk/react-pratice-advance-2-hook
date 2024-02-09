import React, { useEffect, useRef } from 'react'
import MyTextBox from './MyTextBox'


const HookRefForward = () => {
 
    const text = useRef(null);
    //起動時にテキストボックスにフォーカス
   
    useEffect(() => {
        text.current?.focus();
    },[])
    


  return (
    <MyTextBox label="名前" ref={text}/>
  )
}

export default HookRefForward