import {useState, useEffect} from "react"

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact]=useState (null)
    useEffect ( ()=> {
        const fetchSingleContact = async () => {
            try {
                const response = await fetch (`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
                const data = await response.json()
                setContactData
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        } fetchSingleContact()
    }, [])
    return (
        <>
        {contact ?(
            <div>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
        ) : (
            <p>Loading . . . </p>
        )}
            </>
    )
}
