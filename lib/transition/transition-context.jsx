import { createContext, use, useEffect, useState } from "react";
import { useBrowserNativeTransitions } from "./browser-native-events";
const ViewTransitionsContext = createContext(() => () => { });
export function ViewTransitions({ children, }) {
    const [finishViewTransition, setFinishViewTransition] = useState(null);
    useEffect(() => {
        if (finishViewTransition) {
            finishViewTransition();
            setFinishViewTransition(null);
        }
    }, [finishViewTransition]);
    useBrowserNativeTransitions();
    return (<ViewTransitionsContext.Provider value={setFinishViewTransition}>
      {children}
    </ViewTransitionsContext.Provider>);
}
export function useSetFinishViewTransition() {
    return use(ViewTransitionsContext);
}
