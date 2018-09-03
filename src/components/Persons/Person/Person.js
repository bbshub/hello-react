import React from 'react';
import Classes from './Person.css';
import Aux from '../../../hoc/AuxHoc';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <Aux>
            <p onClick={props.click}>Hi, I am {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.change} />
        </Aux>
    );
}

person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.element,
    change: PropTypes.func
}

export default WithClass(person, Classes.person);