import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardsSaved, btnDeleteCard } = this.props;

    const savedingListCards = cardsSaved.map((card) => (
      <div key={ card.cardName }>
        <Card
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
        />
        <button
          type="submit"
          data-testid="delete-button"
          onClick={ () => btnDeleteCard(card.cardName) }
        >
          Excluir
        </button>
      </div>
    ));
    return (
      <section>
        <h2>Todas as Cartas:</h2>
        { savedingListCards }
      </section>
    );
  }
}

CardList.propTypes = {
  cardsSaved: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
