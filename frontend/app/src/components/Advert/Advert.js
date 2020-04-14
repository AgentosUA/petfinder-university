import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.src} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <br />
        {/* <span>Стать: {this.props.gender}</span> */}
        <p>{this.props.breed ? 'Статус: ' + this.props.breed : ''}</p>
        <br />
        <p>{this.props.description}</p>
        <br />
      </div>
    );
  }
}

export default Advert;
