import store from "./stores/index.js";
import {adTodo} from './stores/todo.js'
import {login, logout} from "./stores/auth.js";
import {openModal} from "./stores/modal.js";


export const addTodoHandle = todo =>{
    store.dispatch(adTodo(todo))
}

export const loginhandle = user => {
    store.dispatch(login(user))
}

export const logOutHandle = () =>{
    store.dispatch(logout())
}

export const modal = (name,data = false) => {
    store.dispatch(openModal({
        name,
        data
    }))
}

