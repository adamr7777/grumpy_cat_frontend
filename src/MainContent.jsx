import React, {useState, useContext, useEffect} from 'react';

import {ContextObj} from './AiContext';




export default function MainContent() {
    const defaultText = 'This Grumpy Cat. Although she may seem unfriendly, try asking her questions!';
    const [text, setText] = useState('');
    const {answer, askQuestion} = useContext(ContextObj);
    const [placeHolder, setPlaceHolder] = useState(defaultText);

    function handleChange(event) {
        setText(event.target.value);
    }

    function getAnswer() {
        askQuestion(text);
        setText('');
        setPlaceHolder('Grumpy Cat is thinking...')
    }


    
    function clearTextArea() {
        setPlaceHolder('');
        setText('');
    }

    useEffect(()=> {
        if (answer === '') return;
        setText(answer);
    }, [answer])


    

    return (
        <div className="card">
           <div className="img-div">
                <img src='./src/assets/cat3.jpg'/>
           </div>
           <div className="text">
                <textarea className='flash-placeholder' onChange={handleChange} onFocus={clearTextArea} value={text} placeholder={placeHolder} cols="40" rows="8"/>
                <button type="button" onClick={getAnswer} className="btn btn-primary">Ask!</button>
           </div>
        </div>
    )
}














// export default function MainContent() {
//     const defaultText = 'This the Grumpy Cat. Although she may seem unfriendly, try asking her questions!';
//     const [text, setText] = useState('');
//     const {answer, askQuestion} = useContext(ContextObj);
//     const [personaAnswer, setPersonaAnswer] = useState('start');

//     function handleChange(event) {
//         setText(event.target.value);
//     }

//     function getAnswer() {
//         askQuestion(text);
//         setText('');
//         setPersonaAnswer('Grumpy Cat is thinking...')
//     }


    
//     function clearPlaceH() {
//         setPersonaAnswer('');
//     }

//     useEffect(()=> {
//         // if (answer === '') return;
//         setPersonaAnswer(answer);
//     }, [answer])