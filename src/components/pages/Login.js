import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect } from "react-router-dom"
import './SignUp.scss'
import firebase from '../../firebase'
import { AuthContext } from './Auth'


const Login = ({ history }) => {
	const [option, setOption] = useState(1)
	
	const handleLogin = useCallback(async event => {
		event.preventDefault();
		const {email, password} = event.target.elements;
		try{
			await firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value);
			history.push("/");
		}
		catch(error){
			alert(error);
		}
    }, [history]);
    
    const { currentUser } = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/" />;
    }
	
	return (
		<div>
			<h1>Log In</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name="email" type="email" placeholder="Email"></input>
				</label>
				<label>
					Password
					<input name="password" type="password" placeholder="Password"></input>
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
		// <div className='container'>
		// 	{/* <h1>Home</h1>
		// 	<button onClick={() => firebase.auth().signOut()}>Sign Out</button> */}
			
		// 	<header>
		// 		<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
		// 			<span>Sign in to your account</span>
		// 			<span>Create an account</span>
		// 			<span>Reset your password</span>
		// 		</div>
		// 	</header>
		// 	<ul className='options'>               
        //         <li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
        //         <li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>				
		// 		<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
		// 	</ul>
			
		// 	<form className='account-form' onSubmit={handleSignUp}>
		// 	<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
		// 		<input id='email' name='email' type='email' placeholder='Email' required />
		// 		<input id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
		// 		{/* <input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} /> */}
		// 	</div>
		// 	<button className='btn-submit-form' type='submit'>
		// 		{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
		// 	</button>
		// </form>

		// </div>
	)
}

export default withRouter(Login)
