import ReactDOM from 'react-dom/client';

import {AiContextProv} from './AiContext'; 

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AiContextProv>
        <App/>
    </AiContextProv>
);