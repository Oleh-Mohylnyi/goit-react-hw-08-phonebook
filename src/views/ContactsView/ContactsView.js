import { useFetchPhonebookQuery } from '../../redux/contacts/slice'
import Loader from "react-loader-spinner";
import Filter from '../../components/Filter';
import List from '../../components/List'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal'

export default function ContactsView() {

    const [showModal, setShowModal] = useState(false)
    const { data: contacts, isFetching } = useFetchPhonebookQuery();

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    
    return (
    <>
        {isFetching && <Loader type="ThreeDots" color="blue" height={80} width={80} />}
    
        {contacts && contacts.length > 0
            ? (<>
                <h2>Contacts</h2>
                <button
                    type="button"
                    onClick={() => toggleModal()}>
                        Add contact
                </button>
                <Filter />
                    <List contacts={contacts}/>
            </>)
            : (<p>no contacts at the moment</p>)
            }
        {showModal && <Modal
          closeModal={toggleModal} />}
    </>
)
}