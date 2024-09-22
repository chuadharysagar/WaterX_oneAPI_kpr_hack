import { createContext,useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
   const [isSearchFocused, setIsSearchFocused] = useState(false);
   const categoryFilter = ['Agriculture','Domestic Use','Industrial use','Case Studies','More']

   const contextValue = {
     isSearchFocused,setIsSearchFocused,categoryFilter,

   }

   return (
      <AppContext.Provider value={contextValue}>
         {props.children}
      </AppContext.Provider>
   );

}


export default AppContextProvider;