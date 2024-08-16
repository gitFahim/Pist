import React from 'react';
import './PersonCard.css';

const PersonCard = ({ person, onEdit, onDelete }) => {
    return (
        <div className="person-card">
            {person.image && <img src={person.image} alt={`${person.name}`} className="person-image" />}
            <h2 className="person-name">{person.name}</h2>
            <p className="person-position">{person.position}</p>
            <p className="person-address">{person.address}</p>
            <a href={person.prove} target="_blank" rel="noopener noreferrer" className="view-incident">VIEW INCIDENT</a>
            {onEdit && <button onClick={() => onEdit(person)} className="edit-button">Edit</button>}
            {onDelete && <button onClick={() => onDelete(person.id)} className="delete-button">Delete</button>}
        </div>
    );
};

export default PersonCard;
