import { Button } from "bootstrap"
export default function Header({ login, password, userName, signUp, loginShow }) {
    if (loginShow.current) {
        return <div><h1> 🎼 playlist ⏯</h1></div>
    } else {
        return <div className="heeder">
            <div className="login">
                <input type="text" className="userName" placeholder="enter user name" onChange={(e) => userName(e.target.value)} />
                <input type="text" className="password" placeholder="enter password" onChange={(e) => password(e.target.value)} />
                <button variant="success" className="btn-login" onClick={() => login()}> submit </button>
                <button variant="success" className="btn-signUp" onClick={() => signUp()}> sign up (it's free) </button>
            </div>

        </div>
    }
}