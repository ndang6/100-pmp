import React from 'react'
import './Page.css'
import firebase from '../../firebase'

function Challenge() {
    return (
        <div class="challenge">
            <img class="displayed" src="https://gianlucaguarini.github.io/site-under-construction/demos/bower/assets/img/bower-logo.svg" alt="Bird"/>
            <p>Site under construction!</p>
            <p>You're logged in. Thank you for signing up!</p>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Challenge
