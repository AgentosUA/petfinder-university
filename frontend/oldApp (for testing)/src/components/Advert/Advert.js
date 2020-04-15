import React, { Component } from 'react';

class Advert extends Component {
  render() {
    let breed;
    if (this.props.breed) {
      breed = (
        <p>
          <span>Порода: </span>
          {this.props.breed}
        </p>
      );
    }
    let gender;
    switch (this.props.gender) {
      case 'he':
        gender = 'Він';
        break;
      case 'she':
        gender = 'Вона';
        break;
      default:
        gender = 'Невідомо';
        break;
    }
    return (
      <div className="item">
        <img src={this.props.src} alt={this.props.name} />
        <h3>{this.props.name}</h3>

        <p>
          <span>Стать: </span>
          {gender}
        </p>
        {breed}
        <p>
          <span>Опис: </span>
          {this.props.description}
        </p>
        <br />
      </div>
    );
  }
}

export default Advert;
