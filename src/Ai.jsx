import React, {useEffect, useState} from 'react';

import modes from './modes';


export default function Ai() {

    const [message, setMessage] = useState({});
    const [question, setQuestion] = useState('I found a stone')
    const {god, shakespeare, scripture} = modes;

    function getAi() {
        const definitionRole = `${scripture} ${question}`;
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer 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`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{
                    role: 'user',
                    content: definitionRole,
                }]
            }) 
        })
            .then((response)=> response.json())
            .then((data)=> setMessage(data.choices[0].message));
    }


    
        useEffect(()=> {
            console.log('effect');
            // getAi();
        }, []);

    
     
    

    return(
        <h3>{message.content}</h3>
    ) 
}