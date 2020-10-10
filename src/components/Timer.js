import React, { Component } from 'react'
import './Timer.css'

export default class Timer extends Component {
    state = {
        minutes: 10,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if(minutes === 3 && seconds === 0){
                document.getElementsByClassName("timer")[0].style.backgroundColor = "red";
                document.getElementsByClassName("timer")[0].style.color = "white";
            }

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                
                { minutes === 0 && seconds === 0
                    ? <p class="timer">Time to Submit!</p>
                    : <p class="timer">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                }
            </div>
        )
    }
}

