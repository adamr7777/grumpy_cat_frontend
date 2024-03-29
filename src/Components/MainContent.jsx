import React, {useState, useContext, useEffect} from 'react';

import {ContextObj} from '../Context/Context';


export default function MainContent() {
    const defaultTextBeginning = 'This is Grumpy Cat. Although she may seem a bit aloof and tough, try asking her questions!';
    const defaultTextEnding = 'Just say whatever is on your mind and she will answer in her cute grumpy way!';
    const errorMessage = 'Grumpy cat is sleeping, try asking her again to wake her up!'
    const [text, setText] = useState('');
    const {answer, askQuestion, isError} = useContext(ContextObj);
    const [placeHolder, setPlaceHolder] = useState(`${defaultTextBeginning} ${defaultTextEnding}`);

    function handleChange(event) {
        setText(event.target.value);
    };

    function getAnswer() {
        askQuestion(text);
        setText('');
        setPlaceHolder('Grumpy Cat is thinking...')
    };

    function clearTextArea() {
        setPlaceHolder('');
        setText('');
    };

    useEffect(()=> {
        if (answer === '') return;
        setText(answer);
    }, [answer]);


    useEffect(()=> {
        if (isError) setPlaceHolder(errorMessage);
    }, [isError]);

    return (
        <div className="card">
           <div className="img-div">
                <img src='../cat3.jpg'/>
           </div>
           <div className="text">
                <textarea className='flash-placeholder' onChange={handleChange} 
                    onFocus={clearTextArea} value={text} placeholder={placeHolder} cols="40" rows="8"/>
                <button type="button" onClick={getAnswer} className="btn btn-primary">Ask!</button>
           </div>
        </div>
    );
};












