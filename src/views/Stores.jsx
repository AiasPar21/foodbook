/* eslint-disable jsx-a11y/control-has-associated-label */

/* eslint-disable consistent-return */

/* eslint-disable array-callback-return */

/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeliveryContext } from '@/store/DeliveryProvider';

import Stores from '@/views/stores.json';

/* import { userAddress } from './Home'; */
import './Stores.scoped.scss';

function foodStores() {
  const navigate = useNavigate();
  const { address } = useDeliveryContext();
  const giveId = (event) => {
    const storeId = event.currentTarget.id;
    navigate(`/store-catalog/${storeId}`);
  };

  const [filter, setFilter] = useState('all');

  return (
    <>
      <button type="button" className="backButton" onClick={() => navigate(-1)} />
      <h1 className="Header">
        Location: <span>{address}</span>
      </h1>
      <br />
      <div id="filterAndStores">
        <h3>Category a filter to start</h3>
        <div className="filters">
          <button
            type="button"
            className={`filter ${filter === 'all' ? 'active' : ''}`}
            id="allFilter"
            onClick={() => setFilter('all')}
          >
            Show All
          </button>
          <div className="filterName">
            <button
              type="button"
              className={`filter all ${filter === 'Burger' ? 'active' : ''}`}
              onClick={() => setFilter('Burger')}
              id="burger"
            >
              <img src="./src/assets/icons/burger-filter.png" alt="burger" />
              <p>Burgers</p>
            </button>
          </div>
          <div className="filterName">
            <button
              type="button"
              className={`filter all ${filter === 'Souvlaki' ? 'active' : ''}`}
              onClick={() => setFilter('Souvlaki')}
              id="souvlaki"
            >
              <img src="./src/assets/icons/souvlaki-filter.png" alt="souvlaki" />
              <p>Souvlakia</p>
            </button>
          </div>
          <div className="filterName">
            <button
              type="button"
              className={`filter all ${filter === 'Pizza' ? 'active' : ''}`}
              onClick={() => setFilter('Pizza')}
              id="pizza"
            >
              <img src="./src/assets/icons/pizza-filter.png" alt="pizza" />
              <p>Pizza</p>
            </button>
          </div>
          <div className="filterName">
            <button
              type="button"
              className={`filter all ${filter === 'Pasta' ? 'active' : ''}`}
              onClick={() => setFilter('Pasta')}
              id="pasta"
            >
              <img src="./src/assets/icons/pasta-filter.png" alt="pasta" />
              <p>Pasta</p>
            </button>
          </div>
        </div>
        <div className="stores">
          {Stores.map((store) => {
            if (store.category === filter || filter === 'all') {
              return (
                <button type="button" onClick={giveId} className="card" id={store.id}>
                  <img src={store.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <div className="card__header-text">
                        <h3 className="card__title">{store.name}</h3>
                        <span className="card__status">{store.deliveryTime}</span>
                      </div>
                    </div>
                    <p className="card__description">{store.content}</p>
                  </div>
                </button>
              );
            }
          })}
        </div>
        <h3 className="storesNumber">
          {
            Stores.filter((store) => {
              return store.category === filter || filter === 'all';
            }).length
          }{' '}
          open stores right now
        </h3>
      </div>
    </>
  );
}

export default foodStores;
