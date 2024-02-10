import { useState,useTransition } from "react"
import books from "./books"
import commentList from "./comments"
import { BookDetails } from "./HookTranstionChild"
import { CommentList } from "./HookTranstionChild"



const HookTranstion = () => {
  
    //選択した書籍(isbn)と対応するコメント(comments)
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);

    //トランジションを利用するための準備
    const [isPending , startTransition] = useTransition();


    //選択ボックスの変更に応じてstateを反映
    const handleChange = e => {
        const isbn = e.target.value;
        setIsbn(isbn);
        startTransition(() => { setComments(commentList.filter(c => c.isbn === isbn ));
        });
    };


  return (
   <>
   <select onChange={handleChange}>
     <option value="">選択してください</option>
     {books.map(b => (<option key={b.isbn} value={b.isbn}>{b.title}</option>))}
   </select>
   <BookDetails isbn={isbn} />
   <hr/>
   <CommentList src={comments} isPending={isPending} />
   </>
  )
}

export default HookTranstion