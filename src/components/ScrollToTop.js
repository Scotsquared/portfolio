import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationIcon from '@material-ui/icons/Navigation';
import { Fab } from '@material-ui/core';


export default function ScrollToTop() {
    const { pathname } = useLocation();
    <Fab variant="extended">
        <NavigationIcon className='back-to-top' />
    </Fab>

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}