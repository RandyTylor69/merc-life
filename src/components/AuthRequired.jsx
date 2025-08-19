import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired(){
    const authenticated = true;

    return(
        authenticated?
        <Outlet />
        : <Navigate 
        state="You gotta log in first~"
        to="/login" />
    )
}