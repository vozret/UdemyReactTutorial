import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = 'application/json';

// interceptors are used for inputing a header (e.g. authorization header)
// usually request -> config
// need to return request otherwise the interceptor blocks the request
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit requet config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit requet config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
