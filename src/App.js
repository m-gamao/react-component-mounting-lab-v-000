import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {

  //no props being used here, so we can use the shorthand declaration of state
  state = {
    timerIDs: []
  }


  //Your code here:
  // Since App is the top level component, its componentDidMount method will be invoked before any other child components are even constructed.
  // You can always use the constructor, which fires first, to set up your initial state, so while it is possible to set state from componentDidMount, it isn't a common pattern. Using componentDidMount is instead reserved for taking initial actions within an app. Actions might include getting remote API data, setting cursor focus, or creating an interval or timeout.
  // The App component is keeping track of timers using an array of random ID numbers. This allows for easy removal and addition of Timer components.
 
  // In App, write a componentDidMount method that invokes the existing handleAddTimer class method.

  componentDidMount() {
    this.handleAddTimer()
  }


  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

  // returns array of components written in JSX, mapped from this.state.timerIDs
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

  // adds a random number for timer ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

  // removeTimer updates state, removing any timer that matches the provided author
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;
