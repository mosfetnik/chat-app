import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';



const Register = () => {

    const [err, setErr] = useState(false)
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].file

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

                (error) => {
                    setErr(true)
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "userChat", res.user.uid), {});
                        navigate("/login");
                    }
                    );

                })
        }
        catch (err) {
            setErr(true)
        }

        // for checking the data will be entered or not
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)
        console.log(e.target[3].file)
    }

    return (
        <div className='formContainer'>
            <div className="formWrap">
                <div className="logo">Texer</div>
                <div className="tittle">Register</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your name here' />
                    <input type="email" placeholder='Enter your email here' />
                    <input type="password" placeholder='Enter your password here' />

                    <label for="file-input">

                        <i class="fa-solid fa-user-plus"></i>
                        <span className='uploadText'> upload your avator</span>
                    </label>

                    <input id="file-input" type="file" />

                    <button className='formBtn'>Sign Up</button>
                    {err && <span> Something went wrong</span>}
                </form>
                <p className='formText'>Do you have an account ?   <Link to="/login">Login </Link></p>
            </div>
        </div>
    )
}

export default Register;