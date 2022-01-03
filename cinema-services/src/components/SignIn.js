import React, { useContext } from 'react'
import { UseContext } from '../App'
import { useHistory } from 'react-router-dom';
function SignIn(props) {
    const history = useHistory();
    const {
        setIsLogged,
        signInInformation,
        setSignInInformation
    } = useContext(UseContext);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignInInformation({
            ...signInInformation,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let signInArr = [];
        signInArr = JSON.parse(localStorage.getItem('user')) ?
            JSON.parse(localStorage.getItem('user')) : [];
        const checkUser = signInArr.filter(
            (account) =>
                account.email === signInInformation.loginEmail &&
                account.password === signInInformation.loginPassword
        );
        const check = checkUser.some(
            (account) =>
                account.email === signInInformation.loginEmail &&
                account.password === signInInformation.loginPassword
        );
        if (check) {
            localStorage.setItem('isLogged', JSON.stringify(true));
            localStorage.setItem('loggedAccount', JSON.stringify({
                email: checkUser[0].email,
                username: checkUser[0].username,
                id: checkUser[0].id,
                password: checkUser[0].password,
            }));
            setIsLogged(true);
            history.push('/cinemaservices');
        }
        else {
            alert('you do not have an account please Sign Up');
        }
    }

    return (
        <div>
            <div className='form-container'>
                <div className='form-wrap'>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='loginEmail' id='email' value={signInInformation.loginEmail}
                                onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='conPassword'>Password:</label>
                            <input type='password' name='loginPassword' id='conPassword'
                                value={signInInformation.loginPassword}
                                onChange={handleChange} />
                        </div>
                        <button type='submit'>Sign In</button>
                    </form>
                    <footer className='form-footer'>
                        <p>
                            you don't have an account?<span
                                onClick={() => props.setSwitchLogin_Register(!props.switchLogin_Register)}>Sign Up</span>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default SignIn
