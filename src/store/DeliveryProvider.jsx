/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext();

const useDeliveryContext = () => {
  return useContext(DeliveryContext);
};

export { useDeliveryContext };

function DeliveryProvider({ children }) {
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState([]);
  return (
    <DeliveryContext.Provider value={{ address, setAddress, cart, setCart }}>
      {children}
    </DeliveryContext.Provider>
  );
}

export default DeliveryProvider;
