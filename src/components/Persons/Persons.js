import React from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person 
                change={(event) => props.change(event, person.id)}
                click={() => props.click(index)}
                key={person.id}
                name={person.name} 
                age={person.age}> 
            </Person>
        })
    );
}

persons.propTypes = {
    persons: PropTypes.array,
    change: PropTypes.func,
    click: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
}

export default persons;