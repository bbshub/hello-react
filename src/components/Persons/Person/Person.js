import React, {Component} from 'react';
import Classes from './Person.css';
import Aux from '../../../hoc/AuxHoc';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);

        this.inputElement = React.createRef();
    }

    componentDidMount() {
        if(this.props.position === 0) {
            this.inputElement.current.focus();
        }        
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>Hi, I am {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.change} />
            </Aux>
        ); 
    }
}

// const person = (props) => {
//     return (
//         <Aux>
//             <p onClick={props.click}>Hi, I am {props.name} and my age is {props.age}</p>
//             <p>{props.children}</p>
//             <input type="text" value={props.name} onChange={props.change} />
//         </Aux>
//     );
// }

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.element,
    change: PropTypes.func,
    position: PropTypes.number
}

export default WithClass(Person, Classes.person);