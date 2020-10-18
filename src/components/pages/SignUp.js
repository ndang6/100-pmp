import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from "react-router-dom"
import './SignUp.scss'
import { projectAuth } from '../../firebase'
import { AuthContext } from './Auth'


const SignUp = ({ history }) => {
	const [option, setOption] = useState(1)
	
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const {email, password, repeatPassword} = event.target.elements;
		if(password.value === repeatPassword.value){
			try{
				await projectAuth
					.createUserWithEmailAndPassword(email.value, password.value);
				projectAuth.currentUser.sendEmailVerification().then(function() {

				}).catch(function(error){
					alert("Cannot send email to verify password")
				})
				history.push("/");
			}
			catch(error){
				alert(error);
			}
		}
		else{
			alert("Unmatched Passwords. Try again :)")
		}
	}, [history]);

	const handleLogin = useCallback(async event => {
		event.preventDefault();
		const {email, password} = event.target.elements;
		try{
			await projectAuth
				.signInWithEmailAndPassword(email.value, password.value);
			history.push("/");
		}
		catch(error){
			alert(error);
		}
	}, [history]);

	const handleReset = useCallback(async event => {
		event.preventDefault();
		const {email} = event.target.elements;
		try{
			await projectAuth
				.sendPasswordResetEmail(email.value).then(function(){

				}).catch(function(error){
					alert("Cannot send email to reset password");
				});
			history.push("/signup");
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
			
			<form className='account-form' onSubmit={option === 1 ? handleSignUp : option === 2 ? handleLogin : handleReset}>
				<div className={'account-form-fields ' + (option === 1 ? 'sign-up' : (option === 2 ? 'sign-in' : 'forgot')) }>
					<input id='email' name='email' type='email' placeholder='Email' required />
					<input id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
					<input id='repeatPassword' name='repeatPassword' type='password' placeholder='Repeat password' required={option === 1 ? true : false} disabled={option === 2 || option === 3 ? true : false} />
				</div>
				<button className='btn-submit-form' type='submit'>
					{ option === 1 ? 'Sign up' : (option === 2 ? 'Log in' : 'Reset password') }
				</button>
			</form>

		</div>
	)
}

export default withRouter(SignUp)
