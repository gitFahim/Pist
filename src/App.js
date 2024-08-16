import React, { useState } from 'react';
import PeopleList from './PeopleList';
import PersonForm from './PersonForm';
import LoginForm from './LoginForm'; // Import the LoginForm component
import './App.css';

const initialPeople = [
    {

    },
    // Add more people here
];

function App() {
  const [people, setPeople] = useState(initialPeople);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [role, setRole] = useState('guest'); // Default role is 'guest'
  const [error, setError] = useState(''); // State to manage error messages

    const addPerson = (person) => {
        if (role === 'admin') {
            setPeople([...people, { ...person, id: people.length + 1 }]);
        }
    };

    const updatePerson = (updatedPerson) => {
        if (role === 'admin') {
            setPeople(people.map(person => (person.id === updatedPerson.id ? updatedPerson : person)));
        }
    };

    const deletePerson = (id) => {
        if (role === 'admin') {
            setPeople(people.filter(person => person.id !== id));
        }
    };

    const handleLogin = (username, password) => {
      if (username === 'Admin' && password === 'password') {
          setRole('admin');
          setError(''); // Clear any previous error message on successful login
      } else {
          setError('Invalid username or password'); // Set error message for incorrect credentials
      }
  };

  const handleLogout = () => {
      setRole('guest');
      setCurrentPerson(null);
  };

  return (
    <div className="App">
            <h1>Animal List</h1>
            <div className="center-container">
                <PeopleList
                    people={people}
                    setCurrentPerson={role === 'admin' ? setCurrentPerson : null} // Only allow edit if admin
                    deletePerson={role === 'admin' ? deletePerson : null} // Only allow delete if admin
                />
                {role === 'admin' ? (
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                        <PersonForm
                            addPerson={addPerson}
                            currentPerson={currentPerson}
                            updatePerson={updatePerson}
                            setCurrentPerson={setCurrentPerson}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Admin Login</h2>
                        <LoginForm onLogin={handleLogin} />
                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;