import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetCardBox">
        <div data-testid="planet-card">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
          <p data-testid="planet-name">
            { planetName}
          </p>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;
