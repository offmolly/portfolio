import React, { createContext, useRef } from 'react';

// Create a context
export const RefContext = createContext();

export const RefProvider = ({ children }) => {
  // refs
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const mainRef = useRef(null)
  const connectRef = useRef(null)

  return (
    <RefContext.Provider value={{ aboutRef, homeRef, projectsRef,mainRef,connectRef }}>
      {children}
    </RefContext.Provider>
  );
};