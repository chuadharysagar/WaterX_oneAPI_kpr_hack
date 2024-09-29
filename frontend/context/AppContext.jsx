import { createContext,useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
   const categoryFilter = ['Agriculture','Domestic Use','Industrial use','Case Studies','More']
   const contextValue = {
     categoryFilter,

   }

   return (
      <AppContext.Provider value={contextValue}>
         {props.children}
      </AppContext.Provider>
   );

}


export default AppContextProvider;