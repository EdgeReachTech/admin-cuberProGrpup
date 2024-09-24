'use client';
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface StateContextType {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const context = createContext<StateContextType>({
    showSidebar: false,
    setShowSidebar: () => { }
});

export const StateContext = ({ children }: { children: React.ReactNode }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <context.Provider value={{ showSidebar, setShowSidebar }}>
            {children}
        </context.Provider>
    );
};

export const useStateContext = () => useContext(context);
