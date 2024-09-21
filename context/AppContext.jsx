import { createContext,useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
   const [isSearchFocused, setIsSearchFocused] = useState(false);

   const contextValue = {
     isSearchFocused,setIsSearchFocused

   }

   return (
      <AppContext.Provider value={contextValue}>
         {props.children}
      </AppContext.Provider>
   );

}


export default AppContextProvider;