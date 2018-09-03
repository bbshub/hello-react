import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/AuxHoc';
import PropsType from 'prop-types';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Bharat', age: 36},
      { id:2, name: 'Dimple', age: 35},
      { id:3, name: 'Vicky', age: 32}
    ],
    showPeoples: false
  }

  togglePersonsHandler = () => {  
    this.setState({
      showPeoples: !this.state.showPeoples
    });
  }

  onNameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };   
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
   
    this.setState({
      persons:persons
    });
  }

  onDeletePersonHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({
      persons: persons
    });
  }
  
  render() {
    let peoples = null;
    if (this.state.showPeoples) {
      peoples = (
        <div>
          <Persons
              persons={this.state.persons}    
              change={this.onNameChangeHandler}
              click={this.onDeletePersonHandler} />
        </div> 
      );
    }     

    return (
      <Aux>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPeoples={this.state.showPeoples}      
          togglePersons={this.togglePersonsHandler}
          />
        
          {/* APPROACH 2 - CONDITIONAL RENDERING */}
          {peoples}    
          
          {/* APPROACH - 1 CONDITIONAL RENDERING {
            this.state.showPeoples ? 
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}> </Person>
                <Person 
                  click={() => this.onSwitchNamesHandler('Bharat Bhushan')}
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}> </Person>
                <Person 
                  change={this.onNameChangeHandler}
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}> </Person>
            </div>  : null
          }  */}
      </Aux>
    );
  }
}

App.propsType = {
  title: PropsType.string
}

export default WithClass(App, Classes.App);
