import { createContext,useContext,useState,useEffect } from "react";


const globalContext = createContext();

export  const getGlobalContext = () => useContext(globalContext);

 



const GlobalContext = (props) => {


    const [theme,setTheme] = useState(true);
    const [inputValue,setInputValue] = useState("cat");
    

    const functionalSetTheme = () =>{

        setTheme(!theme);
        document.body.classList.toggle('darkTheme')
    }


    // const gallery ="unsplash"


  return (
    <globalContext.Provider value={{theme,setTheme,functionalSetTheme,inputValue,setInputValue}} >

        {props.children}

    </globalContext.Provider>
  )
}

export default GlobalContext