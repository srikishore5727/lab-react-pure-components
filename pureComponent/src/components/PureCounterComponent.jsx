import React, { PureComponent } from 'react'

export class PureCounterComponent extends PureComponent {
constructor(){
    super()
    this.state = {
        count:0,
        toggle:false
    };
}

    handleIncrement=()=>{
        if(this.state.toggle){
            this.setState({count:this.state.count+1})
        }
        else{
            this.setState({count:this.state.count})
        }
    }

    handleToggle=()=>{
        this.setState({toggle:!this.state.toggle})
    }

  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <h1>Pure Component</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    )
  }
}

export default PureCounterComponent;
