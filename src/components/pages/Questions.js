import React, { useState, useEffect } from 'react'
import './Questions.scss'
import { projectFirestore } from '../../firebase';
import { BeatLoader } from 'react-spinners'
import DelayLink from '../DelayLink';
import StarRating from '../StarRating';
import ProgessBar from '../ProgessBar';


function Questions() {
    const [marks, setMarks] = useState([])
    const [pending, setPending] = useState(true);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState("");
    const delayTime = 1000;
    
    useEffect(() => {
        projectFirestore.collection('marks').onSnapshot((snapshot) => {
            const newMarks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setMarks(newMarks)
            setPending(false);
        })      
    }, [])

    const markAsReviewed = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: true})
    }

    const unMark = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: false})
    }

    const onDelayStart = () => {
        setLoading(true)
    }

    const updateSearch = (e) => {
        setSearch(e.target.value.substring(0, 20))
    }

    const toggle = (e) => {
        if(darkMode.length === 0)
            setDarkMode("dark-mode")
        else
            setDarkMode("")
    }

    let filteredQuestions = marks.filter((question) => {
        return question.title.toString().toLowerCase().indexOf(search) !== -1
    });

    return (   
        <div className={`column-field ${darkMode}`}>
            {!pending &&
                <div className="num">
                    <ProgessBar done={marks.length}></ProgessBar>
                    <BeatLoader loading={loading} />
                    
                    <div className="difficulty">
                        <p>Level of Difficulty</p>
                    </div>             
                </div>
            }
            
            {!pending &&
                <div>
                    <input className="searchBox" type="text" placeholder="Search" value={search} onChange={updateSearch} />
                    <button className="pickQuestion"><DelayLink className="pickQuestionLink" onDelayStart={onDelayStart} delay={delayTime} to={'/questions/' + marks[Math.round(Math.random() * marks.length)].title.toLowerCase().replaceAll(" ", "-")}>Pick A Question</DelayLink></button>
                    <button className="btn-darkMode" onClick={toggle}>Dark Mode</button>
                </div>
            }
            
            {filteredQuestions.map( (mark) => { 
                let name = mark.title ? mark.title : "";
                return (
                    <div className='question-field' key={mark.id}>
                            <div className="title">
                                {mark.reviewed ? 
                                    <div className="reviewed">
                                        <button className='marked-reviewed' value={mark.id} onClick={unMark}>Reviewed</button> 
                                    </div> 
                                    : 
                                    <div className="not-reviewed">
                                        <button className='marked' value={mark.id} onClick={markAsReviewed}>Mark as Reviewed</button> 
                                    </div>
                                }
                                <p className='name'>{mark.title}</p>                  
                                <DelayLink onDelayStart={onDelayStart} delay={delayTime} to={'/questions/' + name.toLowerCase().replaceAll(" ", "-")}><i className="fas fa-biking"></i></DelayLink>
                                
                            </div>
                                                                                                  

                            <div className="rating">
                                <StarRating id={mark.id}></StarRating>
                            </div>                           
                    </div>
                )
            })}                                  
        </div>        
    )
}

export default Questions
