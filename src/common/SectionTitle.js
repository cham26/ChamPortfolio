import React, { Component } from "react";
export default class SectionTitle extends Component {
  render() {
    const { title, description, id } = this.props;
    return (
      <div className="text-center py-5" id={id}>
        <h2>{title}</h2>
        <hr width="30%" />
        {description}
      </div>
    );
  }
}
