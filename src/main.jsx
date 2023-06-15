import ReactDOM from 'react-dom/client';

import {ContextProv} from './Components/Context'; 

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProv>
        <App/>
    </ContextProv>
);