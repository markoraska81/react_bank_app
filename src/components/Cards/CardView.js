import React, {Fragment} from 'react';
// import './CardView.scss';


const CardView = ({img, name, lastName, jmbg, adress, city, postalCode, deposit}) => {

  return (
    <Fragment>
      <li>{name}</li>
      <li>{lastName}</li>
      <li>{jmbg}</li>
      <li>{adress}</li>
      <li>{city}</li>
      <li>{postalCode}</li>
      <li>{deposit}</li>
    </Fragment>
  )

}

export {CardView};
