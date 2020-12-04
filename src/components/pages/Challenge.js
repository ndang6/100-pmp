import React from 'react'
import './Page.css'
import { Link } from 'react-router-dom';
import './Challenge.css'


function Challenge() {
    return (
        <div class="challenge">
            <img class="displayed" src="https://gianlucaguarini.github.io/site-under-construction/demos/bower/assets/img/bower-logo.svg" alt="Bird"/>
            <p>Site under construction</p>
            <p>You're logged in. Thank you for signing up!</p>

            <p>
                <Link to='/tree-traversal'>
                    Tree Traversal
                </Link>
            </p>
            
            <p>
                <Link to='/graph-traversal'>
                    Graph Traversal
                </Link>
            </p>  

            <p>
                <Link to='/fibonacci'>
                    Fibonacci Sequencce
                </Link>
            </p>      
        </div>
    )
}

export default Challenge
