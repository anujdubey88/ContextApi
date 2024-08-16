import {createContext, useContext, useState} from 'react'

export const CounterContext = createContext(null);

export const useCounter = () =>{
    return useContext(CounterContext);
}

export const CounterProvider = (props) => {
    const [counter,setCounter] = useState(0);
    return (
    <CounterContext.Provider value={{counter, setCounter}} > 
    {props.children} 
    </CounterContext.Provider>);
}

