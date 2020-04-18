import React from 'react';
import './Button.scss';

const Button = ({children, type, click}) => {

  const getClasses = () => {
    if (type === "save") {
      return "save"
    }
    if (type === "cancel") {
      return "cancel"
    }
    if (type === "view") {
      return "view"
    }
    if (type === "edit") {
      return "edit"
    }
    if (type === "delete") {
      return "delete"
    }
    if (type === "print") {
      return "print"
    }
    return ""
  }

  return (
    <button className={`button ${getClasses()}`} onClick={click}>{children}</button>
  )
}

export {Button};
