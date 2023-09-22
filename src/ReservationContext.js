// ReservationContext.js
import React, { createContext, useContext, useState } from 'react';

const ReservationContext = createContext();

export function useReservation() {
  return useContext(ReservationContext);
}

export function ReservationProvider({ children }) {
  const [reservation, setReservation] = useState(false);

  const toggleReservation = () => {
    setReservation(!reservation);
  };

  return (
    <ReservationContext.Provider value={{ reservation, toggleReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}