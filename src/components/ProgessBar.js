import React, { useState } from 'react'
import './ProgessBar.css'

function ProgessBar(props) {
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
				opacity: 1,
				width: `${props.done}%`
		}
		setStyle(newStyle);
    }, 1000);
    
    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                    {props.done}%
            </div>
		</div>
    )
}

export default ProgessBar
