import TodoItem from "./Item.jsx";
import {useSelector} from "react-redux";



// eslint-disable-next-line react/prop-types
export default function TodoList(){

    const {todos}  = useSelector(state => state.todo)

    return(
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {todos.map((todo, key) => <TodoItem key={key} todo={todo}/>)}
        </ul>
    )
}