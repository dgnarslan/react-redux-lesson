import { useSelector} from "react-redux";
import {loginhandle, logOutHandle} from "../utils.js";
export default function Header(){

    const {user} = useSelector(state => state.auth)
    const login = (user) => {
       loginhandle(user)
    }
    return(
        <header>
           <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={()=> login({id: 1, username:'tayfunerbilen'})}>Tayfun Erbilen olarak giriş yap</button>
                    <button onClick={()=> login({id: 2, username:'prototurk'})}>Prototürk olarak giriş yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hoşgeldin, {user.username}
                    <button onClick={logOutHandle}>Çıkış yap</button>
                </nav>
            )}
        </header>
        )
}