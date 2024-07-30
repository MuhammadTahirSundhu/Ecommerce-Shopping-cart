import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context state
interface ContextState {
    updateIndex: number;
    setUpdateIndex: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with a default value of null
export const ContextStates = createContext<ContextState | null>(null);

// Define the props for the provider component
interface ContextProviderProps {
    children: ReactNode;
}

// Create the provider component
export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [updateIndex, setUpdateIndex] = useState<number>(0);
    // console.log("UseContextStates used!");

    return (
        <ContextStates.Provider value={{ updateIndex, setUpdateIndex }}>
            {children}
        </ContextStates.Provider>
    );
};
