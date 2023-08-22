import { createContext, useContext, useEffect, useState } from 'react';
import { useCurrentUser } from "@/hooks/auth/useCurrentUser.ts";

const AppContext = createContext({});

export function AppWrapper({ children }) {
  let sharedUserState = useCurrentUser()
  const [sharedState, setSharedState] = useState({});
  useEffect(() => {
    setSharedState(sharedUserState.user)

  },[sharedUserState])

  
  // function updateState(state) {
  //   setSharedState({...sharedState,...state})
  // }
  return (
    <AppContext.Provider value={{sharedState, setSharedState}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}