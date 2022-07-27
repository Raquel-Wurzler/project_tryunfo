import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardsSaved } = this.props;

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
      </div>
    ));
    return (
      <section>
        { savedingListCards }
      </section>
    );
  }
}

CardList.propTypes = {
  cardsSaved: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
