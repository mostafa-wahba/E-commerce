import React from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function ProtectedRoute(props) {

    let cookies = new Cookies()
    let token = cookies.get("userToken")

    if (token) {
        return <Navigate to={"/home"} />
    }
    else {
        return props.children;
    }
}