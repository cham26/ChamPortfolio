import React, { Component } from 'react'

export default class SectionTitle extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = { 
            title: props.title,
            description: props.description,
            id: props.id
        };
    }
  render() {
    return (
      <div className="text-center py-5" id={this.state.id}>
        <h2>{this.state.title}</h2>
        <hr width="30%"/>
        {this.state.description}
      </div>
    )
  }
}
