import {useState} from "react";
import {editTodo} from "../stores/todo.js";
import {useDispatch} from "react-redux";

export default function EditTodo({data, close}){

    const dispatch = useDispatch()

    const [todo, setTodo] = useState(data.todo)
    const [done, setDone] = useState(data.done)
    const submitHandle = (e) =>{
        e.preventDefault()
        dispatch(editTodo({
            id: data.id,
            title: todo,
            done
        }))
        close()
    }
    return(
        <div>
            <p>edit todo modal</p>
            <form onSubmit={submitHandle}>
                <input type="text"  defaultValue={todo} onChange={e => setTodo(e.target.value)}/> <br/>
                <label>
                    <input type="checkbox"  checked={done} onChange={(e)=> setDone(e.target.checked)}/>
                    Tamamlandı olarka işaretle
                </label> <br/>
                <button type="submit">Kaydet</button>
            </form>
            <button onClick={close}>Kapat</button>
        </div>
    )
}