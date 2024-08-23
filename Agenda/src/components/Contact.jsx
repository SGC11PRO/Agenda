import React from "react"

const Contact = ({ contact, number }) => {
    return (
      <li><strong>{contact}</strong> : {number}</li>
    )
  }

  export default Contact