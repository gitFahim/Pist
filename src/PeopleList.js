import React from 'react';
import PersonCard from './PersonCard';

const PeopleList = ({ people, setCurrentPerson, deletePerson }) => {
    return (
        <div className="people-list">
            {people.map(person => (
                <PersonCard
                    key={person.id}
                    person={person}
                    onEdit={setCurrentPerson}  // Only passed if setCurrentPerson is not null
                    onDelete={deletePerson}    // Only passed if deletePerson is not null
                />
            ))}
        </div>
    );
};

export default PeopleList;
