import React, { useReducer } from "react";

export const BookingContext = React.createContext();

const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};

const reducer = (state, action) => {
    switch(action.type) {
      case "begin-booking-process": {
          console.log("booking");
        return {
          ...state,
          status: action.status,
          selectedSeatId: action.selectedSeatId,
          price: action.price,
        };
      }
      default:
        throw new Error(`Unrecognized action: ${action.type}`)
    }
  };
  
  export const BookingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const beginBookingProcess = (data) => {
      dispatch({
        type: "begin-booking-process",
        ...data,
      });
    };
  
    return (
      <BookingContext.Provider
        value={{
          state,
          actions: {
            beginBookingProcess,
          },
        }}
        >
          {children}
      </BookingContext.Provider>
    );
  };
  