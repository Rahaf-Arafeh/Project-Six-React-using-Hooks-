import React, { useContext } from 'react'
import { UseContext } from '../App'
import '../styles/Registeration.css'
import { useHistory } from 'react-router-dom';

function SignUp(props) {
    const history = useHistory();
    const { signUpInformation,
        setSignUpInformation,
        setIsLogged,
        setIsSubmitted } = useContext(UseContext);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignUpInformation({
            ...signUpInformation,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const [username, email, password, confPassword] = e.target;
        let userInfo = {
            id: Math.random() * 100,
            username: username.value,
            email: email.value,
            password: password.value,
            confPassword: confPassword.value
        }
        let signUpArr = [];
        signUpArr = JSON.parse(localStorage.getItem('user')) ?
            JSON.parse(localStorage.getItem('user')) : [];
        if (signUpArr.some((v) => v.email === signUpInformation.email) ||
            password.value !== confPassword.value ||
            password.value < 6)
            alert("email already exist");
        else {
            signUpArr.push(userInfo);
            localStorage.setItem('user', JSON.stringify(signUpArr));
            localStorage.setItem('isLogged', JSON.stringify(true));

            localStorage.setItem('loggedAccount', JSON.stringify({
                username: signUpInformation.username,
                email: signUpInformation.email,
                password: signUpInformation.password,
                confPassword: signUpInformation.confPassword
            }));
            setIsLogged(true);
            setIsSubmitted(true);
            history.push('/cinemaservices');
        }
    }
    return (
        <div>
            <div className='form-container'>
                <div className='form-wrap'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='username'>Enter your name:</label>
                            <input type='text' name='username' id='username' value={signUpInformation.username}
                                onChange={handleChange} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' id='email' value={signUpInformation.email}
                                onChange={handleChange} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' name='password' id='password' value={signUpInformation.password}
                                onChange={handleChange} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='conPassword'>Confirm Password:</label>
                            <input type='password' name='confPassword' id='conPassword' value={signUpInformation.confPassword}
                                onChange={handleChange} required />
                        </div>
                        <button type='submit'>Sign UP</button>
                    </form>
                    <footer className='form-footer'>
                        <p>
                            you have an account?<span
                                onClick={() => props.setSwitchLogin_Register(!props.switchLogin_Register)}>Sign In</span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default SignUp
