import React, { useEffect, useRef, useState } from 'react'

const HookCallbackRef = () => {
 
    const [show,setShow] = useState(false);
    //ボタンクリックで表示、非表示を反転
    const handleClick = () => setShow(!show);

    //[住所]蘭への参照
    const adress = useRef(null);
    //[住所]項目が空でなければ、フォーカスを移動
    useEffect(() => {
        if(adress.current){
            adress.current.focus();
        }
    },[show])

     // const callbackRef = elem => elem?.focus();   ←こちらの方が良い

  return (
   <>
   <div>
       <label htmlFor='name' >名前：</label>
       <input id="name" type="text"/>
   </div>
   <div>
       <label htmlFor='email'>メールアドレス</label>
       <input id="emial" type="email"/>
       <button onClick={handleClick}>拡張表示</button>
   </div>
   {show &&
   <div>
      <label htmlFor='adress'>住所:</label>
      <input id="id" type="text" ref={adress} />
       {/* <input id="address" type="text" ref={callbackRef} /> */}
   </div>
   }
   </>
  )
}

export default HookCallbackRef