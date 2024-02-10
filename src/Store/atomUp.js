import {atom, atomFamily, selector } from "recoil"


//id値を管理するためのatom
export const idsAtom = atom({
  key: 'idsAtom',
  default: []
})

//個々のtodo項目を別個のatomとして管理
export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: null
})


//Todo項目をリストして束ね、操作するためのセレクター
export const todoListSelector = selector({
    key: 'todoListSelector',
    //現在のtodoリストを取得
    get: ({get}) => {
       const ids = get(idsAtom);
       return ids.map(id => get(todoAtom(id)));
    },
    //Todoリストへの追加/完了済み/削除操作
    set: ({set, reset},{type, id, newItem}) => {
     switch(type){
         //新たなTodo項目(todoAtom)を生成
         case 'add':
             set(todoAtom(newItem.id), newItem);
             set(idsAtom, ids => [...ids, newItem.id]);
             break;
        //既存のtodoこうもく(idであるtodoAtom)のisDoneプロパティをtrueに
        case 'done':
            set(todoAtom(id), todo => ({...todo, isDone: true}));
        break;
        //既存のtodo項目(idのあるtodoAtom)を削除& id群(idsAtom)から、対応するid値を削除
        case 'remove':
            reset(todoAtom(id));
            set(idsAtom, ids => ids.filter(e => e !== id));
            break;
        default:
            throw new Error('Type is invalid.');
     }
    }
})