import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardsSaved, filtered, notFiltered, btnDeleteCard, filteringName,
      filteringRare, filteringTrunfo, isDisabledInputs,
    } = this.props;

    const allCards = cardsSaved.map((card, index) => (
      <div key={ index } className="div-card">
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
          onClick={ () => btnDeleteCard(index) }
          className="button-card"
        >
          Excluir Carta
        </button>
      </div>
    ));

    const filteredCards = filtered.map((card, i) => (
      <div key={ i } className="div-card">
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
          onClick={ () => btnDeleteCard(i) }
          className="button-card"
        >
          Excluir Carta
        </button>
      </div>
    ));

    const test = notFiltered && filtered.length === 0;

    return (
      <section>
        <h2 className="all-letter">Cartas Criadas:</h2>
        <div className="filtros">
          <h3>Filtrar Cartas:</h3>
          <div>
            <input
              placeholder="Nome da Carta"
              type="text"
              data-testid="name-filter"
              onChange={ filteringName }
              id="filterName"
              name="filterName"
              disabled={ isDisabledInputs }
              className="input filter"
            />
          </div>
          <div>
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-filter"
              onChange={ filteringRare }
              disabled={ isDisabledInputs }
              className="input rare"
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              name="filterTrunfo"
              id="filterTrunfo"
              onChange={ filteringTrunfo }
              data-testid="trunfo-filter"
              className="trunfo"
            />
          </div>
          <p>Super Trunfo</p>
        </div>
        <div className="list-cards">
          { filtered.length !== 0 || test ? filteredCards : allCards }
        </div>
      </section>
    );
  }
}

CardList.propTypes = {
  cardsSaved: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnDeleteCard: PropTypes.func.isRequired,
  filteringName: PropTypes.func.isRequired,
  notFiltered: PropTypes.bool.isRequired,
  filteringRare: PropTypes.func.isRequired,
  filteringTrunfo: PropTypes.func.isRequired,
  isDisabledInputs: PropTypes.bool.isRequired,
};

export default CardList;
