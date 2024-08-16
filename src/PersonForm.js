import React, { useState, useEffect } from 'react';
import './PersonForm.css';

const PersonForm = ({ addPerson, currentPerson, updatePerson, setCurrentPerson }) => {
    const [person, setPerson] = useState({
        name: '',
        position: '',
        address: '',
        prove: '',
        image: null
    });

    useEffect(() => {
        if (currentPerson) {
            setPerson(currentPerson);
        }
    }, [currentPerson]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    const handleImageChange = (e) => {
        setPerson({ ...person, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPerson) {
            updatePerson(person);
        } else {
            addPerson(person);
        }
        setPerson({
            name: '',
            position: '',
            address: '',
            prove: '',
            image: null
        });
        setCurrentPerson(null);
    };

    return (
        <form onSubmit={handleSubmit} className="person-form">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={person.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="position"
                placeholder="Position"
                value={person.position}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={person.address}
                onChange={handleChange}
                required
            />
            <input
                type="url"
                name="prove"
                placeholder="Prove URL"
                value={person.prove}
                onChange={handleChange}
                required
            />
            <input type="file" onChange={handleImageChange} />
            <button type="submit">{currentPerson ? 'Update' : 'Add'} Person</button>
        </form>
    );
};

export default PersonForm;
