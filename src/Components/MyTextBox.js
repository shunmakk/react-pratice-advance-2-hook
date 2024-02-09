import { forwardRef } from 'react'

//関数コンポーネントはインスタンスを持たないから、親要素⇨小要素を参照することができない。その場合はforwardRef関数を使う。

const MyTextBox = forwardRef(({ label }, ref) => (
    


    <label>
        {label};
        <input type="text" size="15" ref={ref}/>
    </label>
))

export default MyTextBox;