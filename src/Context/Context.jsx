import React, {useEffect, useState, createContext} from 'react';

import prompts from '../prompts';


export const ContextObj = createContext()

export function ContextProv(props) {

    const [message, setMessage] = useState({});
    const [question, setQuestion] = useState('');
    const [isError, setIsError] = useState(false);
    const {catPrompt} = prompts;

    async function getAi() {
        if (question === '') return;
        if (question === undefined) return;
        try {
            const backendApi = 'https://grumpycat-backend.onrender.com/api/cat';
            const apiRequest = `${catPrompt} ${question}`;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                        },
                body: JSON.stringify({
                    message: apiRequest
                })
            };

            const response = await fetch(backendApi, options);
            const data = await response.json()

            setMessage(data.answer);
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