import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import App from '../App';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement: <div>Error</div>,
        children:[
            {
                path:"/",
                element:<App></App>
            }
        ]
    }
])

export default router;

