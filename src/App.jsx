
import './App.css'
import {useState} from "react"
import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact.jsx"

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

export default function App () {
  const [allContacts, setAllContacts] = useState([])
  const[selectedContactId, setSelectedContactId]=useState(null)
  console.log("Contacts: ", allContacts)
  useEffect ( () => {
    const fetchContacts = async () => {
    try {
      const response = await fetch ("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setAllContacts(data)
      console.log(data)
      } catch (error) {
        console.log(error)
    }
  }
    fetchContacts()
  }, [])
  return (
    <>
    {selectedContactId === null?(
      <ContactList allContacts={allContacts} setSelectedContactId={setSelectedContactId}/>
    ) : ( <p>Loading . . . </p>)}
    </>
  )
}

export default App;
