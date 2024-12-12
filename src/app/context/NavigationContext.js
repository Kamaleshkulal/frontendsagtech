// context/NavigationContext.js
'use client'
import React, { createContext, useState, useMemo, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children, initialPath = '/dashboard' }) => {
    const [pathname, setPathname] = useState(initialPath);

    const router = useMemo(() => ({
        pathname,
        navigate: (path) => setPathname(path),
    }), [pathname]);

    return (
        <NavigationContext.Provider value={{ router }}>
            {children}
        </NavigationContext.Provider>
    );
};
