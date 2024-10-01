import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
   const categoryFilter = ['Agriculture', 'Domestic Use', 'Industrial use', 'Case Studies', 'More']

   // for login page data collection 
   const [formData, SetFormData] = useState({
      name: '',
      email: '',
      region: '',
      password: '',
      confrimPass: '',
   })

   // error for the login page 
   const [error, setError] = useState({
      name: false,
      email: false,
      region: false,
      password: false,
      confrimPass: false,
   })

   // password validator
   const comparePassword = (password, confoPass) => {
      return password === confoPass;
   }

   const validatePassword = (password) => {
      return password.length >= 8;
   }

   //email validator
   const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^\d{10}$/;
      return emailRegex.test(email) || mobileRegex.test(email);
   };


   // for the video container 
   const videoData = [
      { id: '1', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4' },
      { id: '3', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '4', uri: 'https://www.w3schools.com/html/movie.mp4' },
   ];


   const contextValue = {
      categoryFilter,
      formData,
      SetFormData,
      error,
      setError,
      comparePassword,
      validatePassword,
      validateEmail,
      videoData,

   }


   return (
      <AppContext.Provider value={contextValue}>
         {props.children}
      </AppContext.Provider>
   );

}


export default AppContextProvider;