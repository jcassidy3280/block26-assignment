import React from "react"
import ContactRow from "./ContactRow";
import {useEffect} from "react";
export default function ContactList (props) {
  console.log(props)
    
 return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
           {props.allContacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} setSelectedContactId={props.setSelectedContactId} />;
        })}
          </tbody>
        </table>
    ); 
}