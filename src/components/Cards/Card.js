import React, {Fragment} from 'react';
import './Card.scss';
import {Button} from '../Button/Button';

const Card = ({name, lastName, deposit, cCard, onDelete, onEdit, onView}) => {


  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{deposit}</td>
      <td>{cCard}</td>
      <td><Button type="view" click={() => onView()}>Pregled</Button></td>
      <td><Button type="edit" click={() => onEdit()}>Izmeni</Button></td>
      <td><Button type="delete" click={() => onDelete()}>Obrisi</Button></td>
    </tr>
  )
}

export {Card};
