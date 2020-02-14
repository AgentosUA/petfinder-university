import React, { Component } from 'react';

class Advert extends Component {
  render() {
    return (
      <div className="item">
        {/* <img src={this.props.imgUrl} alt="animal" /> */}
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Advert;
