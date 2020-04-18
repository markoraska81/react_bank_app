import React, {Component} from 'react';
import './FormView.scss';

import {Button} from '../Button/Button';
import {CardsView} from '../Cards/CardsView';


class FormView extends Component {
  state = {
    name: "",
    lastName: "",
    jmbg: "",
    adress: "",
    city: "",
    postalCode: "",
    deposit: "",
    cCard: ""
  }

  componentDidMount() {
    const {formData} = this.props;
    if (formData) {
      this.setState({
        ...formData
      })
    }
  }

  render() {
    const {name, lastName, jmbg, adress, city, postalCode, deposit, cCard, filteredData} = this.state;

    return (
      <div className="viewAccount-container">
        <h4>Podaci o korisniku</h4>
        <ul className="viewCard">
          <li>IME: {name}</li>
          <li>PREZIME: {lastName}</li>
          <li>JMBG: {jmbg}</li>
          <li>ADRESA: {adress}</li>
          <li>GRAD: {city}</li>
          <li>POSTANSKI BROJ: {postalCode}</li>
          <li>STANJE NA RACUNU: {deposit}</li>
        </ul>
        <section className="addButton-container">
          <Button type="print">Stampaj podatke</Button>
        </section>
      </div>
    )
  }
}

export {FormView};
