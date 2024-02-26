import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import App from '../App';
import Login from '../Components/Login';
import Register from '../Components/Register';
import LinkPage from '../Components/LinkPage';
import Unauthorized from '../Components/Unauthorized';
import RequireAuth from '../Components/RequireAuth';
import Home from '../Components/Home';
import Editor from '../Components/Editor';
import Admin from '../Components/Admin';
import Lounge from '../Components/Lounge';

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <App></App>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "linkpage",
                element: <LinkPage></LinkPage>
            },
            {
                path: "unauthorized",
                element: <Unauthorized></Unauthorized>
            },
            {
                path: "unauthorized",
                element: <Unauthorized></Unauthorized>
            },
            {
                element: <RequireAuth allowedRoles={[ROLES.User]} />,
                children: [
                    { path: "/", element: <Home /> },
                ],
            },
            {
                element: <RequireAuth allowedRoles={[ROLES.Editor]} />,
                children: [
                    { path: "editor", element: <Editor /> },
                ],
            },
            {
                element: <RequireAuth allowedRoles={[ROLES.Admin]} />,
                children: [
                    { path: "admin", element: <Admin /> },
                ],
            },
            {
                element: <RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />,
                children: [
                    { path: "lounge", element: <Lounge /> },
                ],
            },
        ]
    }
])

export default router;

