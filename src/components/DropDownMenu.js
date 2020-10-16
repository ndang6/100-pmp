import React from 'react'
import firebase from '../firebase'
import './DropDownMenu.css'

function DropDownMenu() {
    return (
        <div className="dropdown">
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default DropDownMenu
