import TodoItem from "./Item.jsx";


export default function TodoList({setTodos,todos, user}){
    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} todo={todo} user={user} setTodos={setTodos}/>)}
        </ul>
    )
}