import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from "react-router-dom"
import './SignUp.scss'
import firebase from '../../firebase'
import { AuthContext } from './Auth'


const SignUp = ({ history }) => {
	const [option, setOption] = useState(1)
	
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const {email, password} = event.target.elements;
		try{
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email.value, password.value);
			history.push("/");
		}
		catch(error){
			alert(error);
		}
	}, [history]);

	const handleLogin = useCallback(async event => {
		event.preventDefault();
		const {email, password} = event.target.elements;
		try{
			await firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value);
			history.push("/challenge");
		}
		catch(error){
			alert(error);
		}
	}, [history]);
	
	// If user already logged in
	const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/challenge" />;
    }
	
	return (
		<div className='container'>
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-up' : (option === 2 ? 'sign-in' : 'forgot')) }>
					<span>Create an account</span>
					<span>Log in to your account</span>
					<span>Reset your password</span>
				</div>
			</header>
			<ul className='options'>               
                <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign up</li>
                <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Log in</li>				
				<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
			</ul>
			
			<form className='account-form' onSubmit={option === 1 ? handleSignUp : handleLogin}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-up' : (option === 2 ? 'sign-in' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='Email' required />
				<input id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				{/* <input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} /> */}
			</div>
			<button className='btn-submit-form' type={option !== 3 ? 'submit' : 'reset'}>
				{ option === 1 ? 'Sign up' : (option === 2 ? 'Log in' : 'Reset password (do nothing for now)') }
			</button>
		</form>

		</div>
	)
}

export default withRouter(SignUp)
