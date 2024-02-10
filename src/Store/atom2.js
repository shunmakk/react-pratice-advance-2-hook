import { atom, selector } from "recoil";


export const todoAtom = atom({
    key: 'todoAtom',
    default: [
        {
          id: 1,       //id値
          title: 'WINGS会議の資料作成',  //todo本体
          isDone: false,  //実行ずみか
        },
        {
          id: 2,
          title: '報酬料の振込',
          isDone: true,
        },
        {
          id: 3,
          title: 'A書籍のサポートページ作成',
          isDone: true,
        },
        {
          id: 4,
          title: '読者質問への回答',
          isDone: false,
        },
        {
          id: 5,
          title: 'B出版社と打ち合わせ',
          isDone: false,
        },
      ],
});


export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({get}) => {
    //Todoリスト最後のTodoを表示
    const todo = get(todoAtom)
    return todo.at(-1).id??0;
    },
})
