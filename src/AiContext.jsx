import React, {useEffect, useState, createContext} from 'react';

import modes from './modes';


export const ContextObj = createContext()

export function AiContextProv(props) {

    const [message, setMessage] = useState({});
    const [question, setQuestion] = useState('')
    const {god, shakespeare, scripture, cat} = modes;

    function getAi() {
        if (question === '') return;
        if (question === undefined) return;
        console.log('getAi ran');
        const definitionRole = `${cat} ${question}`;
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer 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`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                // max_tokens: 75,
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
            getAi();
        }, [question]);

    

    return(
        <ContextObj.Provider value={{answer: message.content, askQuestion: setQuestion}}>
            {props.children}
        </ContextObj.Provider>
    ) 
}