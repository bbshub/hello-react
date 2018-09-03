import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:1, name: 'Bharat', age: '36'},
      { id:2, name: 'Dimple', age: '35'},
      { id:3, name: 'Vicky', age: '32'}
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
    const btnStyle = {
      color: 'white',
      backgroundColor: 'green',
      padding: '5px', 
      font: 'inherit'
    }

    let peoples = null;
    if (this.state.showPeoples) {
      peoples = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person 
                  change={(event) => this.onNameChangeHandler(event, person.id)}
                  click={() => this.onDeletePersonHandler(index)}
                  key={person.id}
                  name={person.name} 
                  age={person.age}> </Person>
              )              
            })
          }            
        </div> 
      );

      btnStyle.backgroundColor = Classes.red;
    }

  

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(Classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(Classes.bold);
    }

    return (
      <div className={Classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>Switch Names</button>

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
             
      </div>
    );
  }
}

export default App;
