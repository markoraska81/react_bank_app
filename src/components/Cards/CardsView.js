import React, {Fragment} from 'react';
import './CardsView.scss';
// import uuid from 'react-uuid';  // UUID se koristi kada ne radimo sa FIREBASE

import {CardView} from './CardView.js';


const CardsView = ({data, search, onDataFilter, openFormAdd, onCardDelete, onCardEdit, onCardView}) => {

  const renderCards = () => (
    <div className="account-container">
      <ul className="viewCard">
        {data.map(card => <CardView  key={card.id}
                                     name={card.name}
                                     lastName={card.lastName}
                                     jmbg={card.jmbg}
                                     adress={card.adress}
                                     city={card.city}
                                     postalCode={card.postalCode}
                                     deposit={card.deposit}
                                     cCard={card.cCard}/>)}
      </ul>
    </div>
  )

  return (
    <Fragment>
      {renderCards()}
    </Fragment>
  )
}

export {CardsView};
