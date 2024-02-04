"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type SessionId = string | null;
type SessionContextData = { sessionId: SessionId };
type SessionContextUpdaterData = {
  updateSessionId: (value: string | null) => void;
};

// create contexts
const SessionContext = createContext<SessionContextData | undefined>(undefined);
const SessionContextUpdater = createContext<
  SessionContextUpdaterData | undefined
>(undefined);

// session context consumer hook
export const useSessionContext = () => {
  // get the context
  const context = useContext(SessionContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useSessionContext was used outside of its Provider");
  }

  return context;
};

// session updater context consumer hook
export const useSessionContextUpdater = () => {
  // get the context
  const context = useContext(SessionContextUpdater);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error(
      "useSessionContextUpdater was used outside of its Provider"
    );
  }

  return context;
};

// export function useSetSessionId(): (sessionId: string | null) => void {
//   return useContext(SessionContext).setSessionId;
// }

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // the value that will be given to the context
  const [sessionId, setSessionId] = useState<SessionId>(null);

  // fetch the session from localstorage
  useEffect(() => {
    const fetchSessionId = () => {
      const result = localStorage.getItem("sessionId");
      setSessionId(result);
    };

    fetchSessionId();
  }, []);

  // update session id to localstorage
  const updateSessionId = useCallback(
    (value: string | null) => {
      if (value == null) {
        localStorage.removeItem("sessionId");
      } else {
        localStorage.setItem("sessionId", value);
      }
      setSessionId(value);
    },
    [setSessionId]
  );

  return (
    <SessionContext.Provider value={{ sessionId }}>
      <SessionContextUpdater.Provider value={{ updateSessionId }}>
        {children}
      </SessionContextUpdater.Provider>
    </SessionContext.Provider>
  );
};

// const getSavedSessionId = () => {
//   return localStorage.getItem("sessionId");
// };

// export function setSavedSessionId(sessionId: string | null) {
//   if (sessionId == null) {
//     localStorage.removeItem("sessionId");
//   } else {
//     localStorage.setItem("sessionId", sessionId);
//   }
// }
