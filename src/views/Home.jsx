import { useNavigate } from 'react-router-dom';

import { useDeliveryContext } from '@/store/DeliveryProvider';

import './Home.scoped.scss';

const myStyle = {
  backgroundImage: 'url(./src/assets/images/banner.jpg)',
  height: '100vh',
  widht: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default function Hello() {
  const { address, setAddress } = useDeliveryContext();
  const navigate = useNavigate();

  const getAddress = () => {
    if (address.length > 0) {
      navigate('/store-list');
    }
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div style={myStyle} id="banner">
      <p className="theWay">Add your address to start!</p>
      <div className="address">
        <input onChange={changeAddress} className="addr" value={address} />
        <button type="button" onClick={getAddress} className="addrbutton">
          go
        </button>
      </div>
    </div>
  );
}
