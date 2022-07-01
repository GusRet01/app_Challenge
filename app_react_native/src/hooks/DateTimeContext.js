import { useState } from "react";
import { createContext } from "react";

const inicialState = {
  dateContext: null,
  timeContext: null,
  toggleDateTime: () => null,
};

export const DateTimeContext = createContext(inicialState);

const DateTimeContextProvider = ({ children }) => {
  const [dateTime, setDateTime] = useState({
    dateContext: null,
    timeContext: null,
  });
  const toggleDateTime = (dateContext , timeContext) =>{
      setDateTime({
        dateContext: dateContext,
          timeContext: timeContext,
      })
  }
  return <DateTimeContext.Provider value={{...dateTime , toggleDateTime}}>{children}</DateTimeContext.Provider>;
};

export default DateTimeContextProvider;