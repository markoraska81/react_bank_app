import React, {Component} from 'react';
import './FormAdd.scss';

import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

class FormAdd extends Component {
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

  onInputChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  onFormClear = () => {
    this.setState({
      name: "",
      lastName: "",
      jmbg: "",
      adress: "",
      city: "",
      postalCode: "",
      deposit: "",
      cCard: ""
    })
  }

  submitForm = () => {
    const data = {...this.state};
    const {onFormSubmit, onFormEdit} = this.props;

    if (data.id) {
      onFormEdit(data); // editujemo podatke
    } else {
      onFormSubmit(data); // postujemo podatke
    }
  }

  render() {
    const {name, lastName, jmbg, adress, city, postalCode, deposit, cCard} = this.state;

    return (
      <div className="addAccount-container">
        <h4>Podaci o korisniku</h4>
        <section className="formAdd">
          <Input type="text"
                 name="name"
                 placeholder="ime"
                 value={name}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="lastName"
                 placeholder="prezime"
                 value={lastName}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="jmbg"
                 placeholder="jmbg"
                 value={jmbg}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="adress"
                 placeholder="adresa"
                 value={adress}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="city"
                 placeholder="grad"
                 value={city}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="postalCode"
                 placeholder="postanski broj"
                 value={postalCode}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="deposit"
                 placeholder="deposit"
                 value={deposit}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
          <Input type="text"
                 name="cCard"
                 placeholder="kreditna kartica"
                 value={cCard}
                 onInputChange={(value, name) => this.onInputChange(value, name)}/>
           <section className="addButton-container">
             <Button type="save" click={() => this.submitForm()}>Save</Button>
             <Button type="cancel" click={() => this.onFormClear()}>Cancel</Button>
           </section>
        </section>
      </div>
    )
  }
}

export {FormAdd};
