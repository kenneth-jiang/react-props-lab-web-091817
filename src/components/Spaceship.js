import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
          <p>Name: {this.props.name}</p>
          <p>Speed: {this.props.speed}</p>
          <p>hasRockets: {this.props.hasRockets ? "Yes" : "No"}</p>
          colors: {this.props.colors.map(color => {
              return <li> {color} </li>
            })
          }
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
