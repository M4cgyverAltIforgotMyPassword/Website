"use client";

//TODO: The current version of nextjs (as of 4/9/23) doesent have a set cookie function, for now we use react-cookie instead

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCookies } from 'react-cookie';

export default function Session() {
    const [cookieSet, setCookieSet] = useState(false);
    const [cookies, setCookie] = useCookies(['session']);

    useEffect(() => {
        if (!cookies.session) {
            setCookie('session', uuidv4());
            setCookieSet(true);
        }
    }, []);

    return <meta name="sessionId" content={cookies.session?.toString()}/>;
};