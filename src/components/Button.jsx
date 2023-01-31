import React from 'react'

function Button({action, text, style}) {
  return (
    <button onClick={action} className={style}>{text}</button>
  )
}

export default Button