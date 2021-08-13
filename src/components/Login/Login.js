import React from 'react'

const Login = ({setLogin}) => {

    const handleLogin = ()=>{
        localStorage.setItem('login',true);
        setLogin(true);
    }

    return (
        <div>
            <a href='./dashboard.html'><button>Click here to go to admin page</button></a>
            <button onClick={handleLogin}>Login Here</button>
        </div>
    )
}

export default Login
