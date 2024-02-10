import { memo } from "react"

//カウンターを増減するためのボタン
// id:id値　　handleclick:ボタンのハンドラー　chlidren  ボタンキャプション

export const Mybutton = memo(({id, handleClick, children}) => {
  //再描画時にログ
  console.log(`My button is called: ${id}`)

  return(
      <button onClick={handleClick}>{children}</button>
  )
})

//カウンター値を表示するためのラベル
// id: id値　　value:　表示するための値
export const Mycounter  = memo(({ id, value }) => {
   //再描画時にログ
   console.log(`My counter is called: ${id}`)
   return(
       <p>現在値： {value}</p>
   )
})