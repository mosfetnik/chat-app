import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {


    const [err, setErr] = useState(false)
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value
        const password = e.target[1].value

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch (err) {
            setErr(true)
        }
    }

    return (

        <div className='formContainer'>
            <div className="formWrap">
                <div className="logo">Texer</div>
                <div className="tittle">Login</div>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Enter your email here' />
                    <input type="password" placeholder='Enter your password here' />
                    <button className='formBtn'>Sign In</button>
                </form>
                {err && <span> Something went wrong</span>}
                <p className='formText'>Don't have an account ? <Link to="/registration">SignUp</Link>  </p>
            </div>
        </div>

    )
}

export default Login;
