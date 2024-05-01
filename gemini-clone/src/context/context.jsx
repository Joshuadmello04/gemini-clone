import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState("");
    const [showResult,setShowResult] = useState(false);
    const [loadng,setLoading] = useState(false)
    const [resultData,setResultData] = useState("");

    const onSent = async(prompt) =>{
        await runChat(input)
    }    
    const contextValue = {
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      loadng,
      resultData,
      input,
      setInput
    }
    return (
        <Context.Provider>
           {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;