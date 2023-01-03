import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    const superTrunfoElement = (cardTrunfo === true
      ? (
        <img
          src="./Tryunfo.png"
          alt="logo-tryunfo"
          data-testid="trunfo-input"
          className="img-tryunfo"
        />
      ) : '');

    return (
      <div className="card">
        <div className="card-itens">
          <p className="name-info">Nome:</p>
          <p data-testid="name-card">{cardName}</p>
        </div>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="img-card"
        />
        <div className="card-description">
          <p className="name-info">Descrição:</p>
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="card-itens">
          <p className="name-info">Nível de fofura:</p>
          <p data-testid="attr1-card">{cardAttr1}</p>
        </div>
        <div className="card-itens">
          <p className="name-info">Nível de Coragem:</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
        </div>
        <div className="card-itens">
          <p className="name-info">Altura do Latido:</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
        </div>
        <div className="card-itens">
          <p className="name-info">Raridade:</p>
          <p data-testid="rare-card">{cardRare}</p>
        </div>
        {superTrunfoElement}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
