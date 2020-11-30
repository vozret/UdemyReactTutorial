import React from 'react';
import Person from './Persons/Person';

// => () -> automatically returns things in props
const Persons = (props) => (
    props.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
          />
        );})
    );

export default Persons;