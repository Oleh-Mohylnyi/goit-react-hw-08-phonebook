import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from '../../redux/auth/operations'

export default function RegisterView() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
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
        // let nameUser = name;
        // if (name === '') {
        //     nameUser = email.substring(email.search('@'), email.length)
        // };
        // console.log(nameUser);
        const user = { name, email, password };
        dispatch(register(user));
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
        <h2>Registration</h2>
        
        <form
                onSubmit={handlSubmit}>
            <input
                name="name"
                value={name}
                type="text"
                placeholder="name"
                onChange={handleChange}
            />
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
            <button type="submit">register</button>
        </form>
        </>
    )
}