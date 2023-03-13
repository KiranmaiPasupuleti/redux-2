import React, { Component } from 'react'
import { connect } from 'react-redux'

export class App extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <h1>{this.props.greeting}</h1>
        Count : {this.props.count}
        <button onClick={this.props.increment}>Increase</button>
        <button onClick={this.props.decrement}>Decrease</button>
        <h1>History</h1>
        <ul>
          {this.props.history.map(eachElement => (<li key={eachElement.id}>
            {eachElement.count}
          </li>))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
    count : state.count,
    history : state.history
  }
} 

const mapDispatchToProps =(dispatch) => {
  return {
    increment: () => 
    dispatch({
      type: "INCREMENT",
      value:10
    }) ,
    decrement: () => 
    dispatch({
      type: "DECREMENT",
      value:10
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)