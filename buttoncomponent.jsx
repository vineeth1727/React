import React, { Component } from 'react';
class ButtonComponent extends Component {
    state = {
        counter:0
      } 
      PressButton=()=>{
        this.setState({counter:this.state.counter+1})
      }
    render() { 
        return (
           <div>
            <span className='badge bg-dark'>{this.state.counter}</span>
            <button className='btn btn-primary m-4' onClick={this.PressButton}>
                Press 
            </button>
           </div>
        );
    }
}
 
export default ButtonComponent;