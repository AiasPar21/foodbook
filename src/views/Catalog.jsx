/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from 'react-router-dom';

import { useDeliveryContext } from '@/store/DeliveryProvider';

import Stores from '@/views/stores.json';

import './Catalog.scoped.scss';

function storeCatalog() {
  const { cart, setCart } = useDeliveryContext();
  const navigate = useNavigate();
  const { id } = useParams();
  function order() {
    navigate('/cart');
  }

  const store = Stores.find((s) => s.id === parseInt(id, 10));
  console.log(store);

  return (
    <div className="pageBody">
      <div className="mainPicture">
        <button type="button" className="backButton" onClick={() => navigate(-1)}>
          Back
        </button>
        <div>
          <h1>{store.name}</h1>
          <h4>{store.content}</h4>
        </div>
      </div>

      <div className="storeInfo">
        <p>
          address: <span>{store.address}</span>
        </p>
        <p>
          Delivery Time: <span>{store.deliveryTime}</span>
        </p>
      </div>

      <div className="menuTitle">
        <h1>Menu</h1>
      </div>
      <div className="menuAndCart">
        <div className="menu">
          <div className="menuList">
            {store.catalog.map((p) => (
              <div className="menuItem">
                <div className="nameDesc">
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                </div>
                <div className="buttonAndPrice">
                  <h1>{p.price}€</h1>
                  <div className="theButtons">
                    <button
                      type="button"
                      className="leButton"
                      id="plus"
                      onClick={() => {
                        setCart((prev) => {
                          return [...prev, p];
                        });
                      }}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="leButton"
                      onClick={() => {
                        setCart((prev) => {
                          return prev.filter((product) => {
                            return product.id !== p.id;
                          });
                        });
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart">
          <h1>Cart</h1>
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
          <div className="numberInfo">
            <p className="numberOfItems">
              Items: <span>{cart.length}</span>
            </p>
            <p className="total">
              Total:{' '}
              <span>
                {cart
                  .reduce((acc, current) => {
                    return acc + current.price;
                  }, 0)
                  .toFixed(2)}
                €
              </span>
            </p>
          </div>
          <button type="button" onClick={order} className="orderButton">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default storeCatalog;
