/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';

import { useDeliveryContext } from '@/store/DeliveryProvider';

import './Cart.scoped.scss';

function theCart() {
  const { cart } = useDeliveryContext();
  const navigate = useNavigate();
  function complete() {
    navigate('/complete');
  }

  return (
    <>
      <button type="button" className="backButton" onClick={() => navigate(-1)} />
      <div className="cartStructure">
        <div className="actualCart">
          <h1 id="summaryTitle">Order Summary</h1>
          <div className="boughtProducts">
            {cart.length > 0 ? (
              cart.map((product) => (
                <div className="cartProductInfo" key={product.id}>
                  <div className="nameAndDesc">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                  <h2>{product.price}€</h2>
                </div>
              ))
            ) : (
              <p className="noProducts">No products yet</p>
            )}
          </div>
          <div className="totalAndButton">
            <div className="total">
              <h3>Total</h3>
              <h1>
                {cart
                  .reduce((acc, current) => {
                    return acc + current.price;
                  }, 0)
                  .toFixed(2)}
                €
              </h1>
            </div>
            <button type="button" className="completeOrderButton" onClick={complete}>
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default theCart;
