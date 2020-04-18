import React, {Fragment} from 'react';
import './Cards.scss';
// import uuid from 'react-uuid';  // UUID se koristi kada ne radimo sa FIREBASE

import {Card} from './Card.js';
import {Search} from '../Search/Search';


const Cards = ({data, search, onDataFilter, openFormAdd, onCardDelete, onCardEdit, onCardView}) => {

  const renderSearch = () => {
    // postavimo uslov za postojanje SEARCH komponente
    if (search) {
      return <Search data={data}
                     onDataFilter={onDataFilter}/>
    }
    return null
  }

  const renderCards = () => (
    <Fragment>
      {data.map(card => <Card  key={card.id}
                               name={card.name}
                               lastName={card.lastName}
                               deposit={card.deposit}
                               cCard={card.cCard}
                               onDelete={() => onCardDelete(card.id)}
                               onEdit={() => onCardEdit(card.id)}
                               onView={() => onCardView(card.id)}/>)}
    </Fragment>
    )

  return (

    <div className="account-container">
      <h3>Korisnici</h3>
      <section className="button-container">
        <span className="add" onClick={openFormAdd}>Dodaj korisnika</span>
        {renderSearch()}
      </section>
      <table className="table">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Racun</th>
            <th>Kartica</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {renderCards()}
        </tbody>
        </table>
      </div>

  )
}

export {Cards};
