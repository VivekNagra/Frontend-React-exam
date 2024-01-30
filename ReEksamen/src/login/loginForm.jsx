import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ login }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const navigate = useNavigate();

    const performLogin = async (evt) => {
        evt.preventDefault();
        await login(loginCredentials.username, loginCredentials.password);
        navigate("/admin");
    }

    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={performLogin}>
                <input placeholder="Username" id="username" onChange={onChange}/>
                <input placeholder="Password" id="password" type="password" onChange={onChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default LogIn;