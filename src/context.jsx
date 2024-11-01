import React, { children } from "react";
import { useState,useEffect } from "react";
 const AppContext = React.createContext();

 export const API_URL ="http://www.omdbapi.com/?apikey=4dc11988&shttp://www.omdbapi.com/?apikey=75816469";

 const AppProvider = ({children}) =>  {
    const [movie,setMovie]= useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]= useState({ show:'false', msg:""});
    const [input,setInput] = useState("titanic");

   let getMovies = async(url) => {
    try{
         const res= await fetch(url);
         const data= await res.json();
         console.log(data);
     if(data.Response === "True"){
        setLoading(false);
        setMovie(data.Search);
     }else {
        setError({show: true , msg: "data not found"});
     }

    } catch(e) {
        console.log(e);
    }
   }


    useEffect(() => {
        let timer=setTimeout(() => {
            getMovies(`${API_URL}&s=${input}`);
        },1000)

        return () => clearTimeout(timer);
    },[input]);

    return <AppContext.Provider value={{loading, movie,error, input,setInput}}>
        {children}
    </AppContext.Provider>
 }


export {AppContext, AppProvider};