import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/operations'
import { Link } from 'react-router-dom'


export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
    };

    const handlSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(login(user));
        setEmail("");
        setPassword("");
    };

    return (
      <>
        <h2>Login</h2>

        <form
                onSubmit={handlSubmit}>
            <input
                name="email"
                value={email}
                type="mail"
                placeholder="email"
                onChange={handleChange}
                required
            />
            <input
                name="password"
                value={password}
                type="password"
                placeholder="password"
                onChange={handleChange}
                required
            />
          <button type="submit">login</button>
          
          <span>dont have an account?</span>
          <Link
                // activeClassName={s.ActiveLink}
                // className={s.Link}
                to="/register">Register</Link>
            </form>
            

            
        </>
    )
}