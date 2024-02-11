import React, { useDeferredValue, useState } from 'react'

//特定の値の「遅延」バージョンを生成するuseDeferredValue関数

const HookDeferred = () => {
 
    const [text, setText] = useState('');

    //変数テキストの遅延バージョンを生成
    const defaultText = useDeferredValue(text);

    //テキストボックスを変更した際に、text/defaulttext双方をログ表示
    const handleChange = e => {
        setText(e.target.value);
        console.log(text, defaultText);
    };


  return (
   <>
   <input type="text" value={text} onChange={handleChange}/>
   {[...Array(10)].map((e, index) =><p key={index}>{defaultText}</p> )}
   {/* ↑本来なら10000にする. */}
   </>
  )
}

export default HookDeferred