import {useState} from "react";
import Header from "./todo/Header.jsx";
import AddTodo from "./todo/AddTodo.jsx";
import TodoList from "./todo/List.jsx";


export default function App (){

    const [todos, setTodos] = useState([])
    const [user, setUser] = useState(false)
    const [language, setLanguage] = useState('tr')
    const [dark , setDark] = useState(true)
    return(
        <main>
            <Header user={user} setUser={setUser}/>
            <AddTodo setTodos={setTodos} user={user}/>
            <TodoList todos={todos} setTodos={setTodos} user={user}/>
        </main>
    )
}
