import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import s from './list.module.scss';
import { useSelector } from 'react-redux';



export default function List({ contacts }) {
    const [editCheckbox, setEditCheckbox] = useState(false)

    const filter = useSelector(state => state.contacts.filter);
    

    const filterContacts = (contacts, filter) => {
        if (contacts) {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        } else {return []}
    }
    const filtredContacts = filterContacts(contacts, filter)
    
    let classNameCheckbox = 'checkboxEdit';
    if (editCheckbox) {
    classNameCheckbox += ' checkboxEditActive'
    };

    const backgroundColorItem = contact =>
        filtredContacts.indexOf(contact) % 2 === 0
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: 'white' };

    return (
        <div className={s.contactsList}>

            <label className={classNameCheckbox}>
                Edit
                <input
                    type="checkbox"
                    className={s.hidden}
                    checked={editCheckbox}
                    onChange={() => setEditCheckbox(!editCheckbox)}
                />
            </label>
            <ul className={s.list}>
                {filtredContacts &&
                    filtredContacts.map(contact =>
                        <ListItem
                            key={contact.id}
                            contact={contact}
                            backgroundColorItem={backgroundColorItem(contact)}
                            statusCheckbox={editCheckbox}
                        />
                    )}
            </ul>
        </div>
    );
}


