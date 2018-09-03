import React from 'react';
import Classes from './Cockpit.css';
import Aux from '../../hoc/AuxHoc';
import PropTypes from 'prop-types';

const cockpit = (props) => {
    let btnClass= '';
    if (props.showPeoples) { 
        btnClass=Classes.red;
    }

    const assignedClasses = [];
    if(props.persons.length <= 2) {
      assignedClasses.push(Classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(Classes.bold);
    }

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>           
            <button className={btnClass} onClick={props.togglePersons}>Toggle persons</button>
        </Aux>      
    )
}

cockpit.propTypes = {
    showPeoples: PropTypes.bool,
    persons: PropTypes.array,
    title: PropTypes.string,
    togglePersons: PropTypes.func
}

export default cockpit;