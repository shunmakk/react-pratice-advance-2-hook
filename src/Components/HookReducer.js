import React, { useReducer } from 'react'

const HookReducer = ({init}) => {
  
    //State+Reducerの準備
    const [state, dispatch] = useReducer(
        //Reducer関数
        (state, action) => {
          switch(action.type){
              case 'update':
                  return {count: state.count + 1};
              default:
                  return  state;
          }
        },
        //stateの初期値
        {
            count: init
        }
    );

    //Reducer経由でstateを更新
    const handleClick = () => {
        dispatch({type: 'update'});
    };


  return (
    <>
    <button onClick={handleClick}>クリック</button>
    <p>{state.count}回、クリックされました。</p>
    </>
  )
}

export default HookReducer