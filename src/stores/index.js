import {configureStore} from '@reduxjs/toolkit';
import todo from "./todo.js";
import auth from './auth.js'
import modal from './modal.js'
const store = configureStore({
    reducer:{
    todo,
    auth,
    modal
    }
})


export default store