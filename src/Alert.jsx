import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert fixed-bottom alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.alert} {props.alert.message}</strong>
    </div>
  )
}