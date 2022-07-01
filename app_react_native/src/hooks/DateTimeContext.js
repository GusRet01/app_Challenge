import { useState } from "react";
import { createContext } from "react";

const inicialState = {
  dateContext: null,
  timeContext: null,
  category: null,
  toggleDateTime: () => null,
};

export const DateTimeContext = createContext(inicialState);

const DateTimeContextProvider = ({ children }) => {
  const [dateTime, setDateTime] = useState({
    dateContext: null,
    timeContext: null,
    category: null,
  });
  const toggleDateTime = (dateContext, timeContext, category) => {
    setDateTime({
      dateContext: dateContext,
      timeContext: timeContext,
      category: category,
    });
  };
  return (
    <DateTimeContext.Provider value={{ ...dateTime, toggleDateTime }}>
      {children}
    </DateTimeContext.Provider>
  );
};

export default DateTimeContextProvider;
