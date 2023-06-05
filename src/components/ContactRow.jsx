import React from "react"
export default function ContactRow({ contact, setSelectedContactId }) {
    console.log(setSelectedContactId)
  return (
    <tr onClick = {() => {
        console.log(contact.id);
        setSelectedContactId(contact.id)
    }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}