import React, {useEffect, useState, createContext} from 'react';

import prompts from '../prompts';


export const ContextObj = createContext()

export function ContextProv(props) {

    const [message, setMessage] = useState({});
    const [question, setQuestion] = useState('');
    const [isError, setIsError] = useState(false);
    const {catPrompt} = prompts;
    const apiKey = import.meta.env.VITE_API_KEY;

    async function getAi() {
        if (question === '') return;
        if (question === undefined) return;
        try {
            const apiUrl = 'https://api.openai.com/v1';
            const chatGpt35Endpoint = '/chat/completions';
            const apiRequest = `${catPrompt} ${question}`;
            const response = await fetch(apiUrl + chatGpt35Endpoint, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    // max_tokens: 75,
                    messages: [{
                        role: 'user',
                        content: apiRequest,
                    }]
                })
            });
            const data = await response.json();
            setMessage(data.choices[0].message);
        }

        catch(error) {
            setIsError(true);
        };
    };

    
        useEffect(()=> {
            getAi();
        }, [question]);


    return(
        <ContextObj.Provider value={{answer: message.content, askQuestion: setQuestion, isError: isError}}>
            {props.children}
        </ContextObj.Provider>
    );
};