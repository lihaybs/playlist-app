import { Button } from "bootstrap"
import { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
export default function Header({ login, password, userName, signUp, loginShow, loginDetails }) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }
    return !loginShow ? <div className="header">
        <div className="welcome"> <h6> welcome <h5>{loginDetails.username} !</h5> </h6></div>
        <h1> 🎼 playlist ⏯</h1></div> :
        <div className="header">
            <div className="login">
                <input type="text" className="userName input" placeholder="enter user name" onChange={(e) => userName(e.target.value)} />
                <input type="password" className="password input" placeholder="enter password" onChange={(e) => password(e.target.value)} />
                {/* <button variant="success" className="btn-login" onClick={() => login()}> submit </button> */}
                {/* <button variant="success" className="btn-signUp" onClick={() => signUp()}> sign up (it's free) </button> */}
                <LoadingButton
                    onClick={() => { handleClick(); login() }}
                    loading={loading}
                    loadingIndicator="loading"
                    variant="outlined"
                >
                    sign in
                </LoadingButton>
                <LoadingButton
                    onClick={() => { handleClick(); signUp() }}
                    loading={loading}
                    loadingIndicator="loading"
                    variant="outlined"
                >
                    sign up
                </LoadingButton>
            </div>

        </div>
}
