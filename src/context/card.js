import { useContext, useState, createContext} from "react";

export const CardContext = createContext({
    name : "LAPTOP",
    price : 100000,
    Count : 1,
},);

export const useCard = () => {
    return useContext(CardContext);
}

export const CardProvider = (props) => {
    const [cards, setCards] = useState([]);
    return (
    <CardContext.Provider value={{cards,setCards}}>
        {props.children}
    </CardContext.Provider>);
}
