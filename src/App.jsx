import Header from "./todo/Header.jsx";
import AddTodo from "./todo/AddTodo.jsx";
import TodoList from "./todo/List.jsx";
import Modal from "./todo/Modal.jsx";
import {useSelector} from "react-redux";


export default function App (){
    const {open : isModalOpen} = useSelector(state => state.modal)
    /*const [language, setLanguage] = useState('tr')
    const [dark , setDark] = useState(true)*/

    return(
        <main>
            {isModalOpen && <Modal/>}
            <Header/>
            <AddTodo/>
            <TodoList />
        </main>
    )
}
