import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <section>
        <h1>Adicionar Nova Carta</h1>

        <form className="containerLetter">
          <label htmlFor="name">
            Nome da Carta:
            <input
              type="text"
              name="name"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            Descrição da Carta:
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="first-attribute">
            Primeiro Atributo da Carta:
            <input
              type="number"
              name="first-attribute"
              id="first-attribute"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="second-attribute">
            Segundo Atributo da Carta:
            <input
              type="number"
              name="second-attribute"
              id="second-attribute"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }

            />
          </label>

          <label htmlFor="third-attribute">
            Terceiro Atributo da Carta:
            <input
              type="number"
              name="third-attribute"
              id="third-attribute"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }

            />
          </label>

          <label htmlFor="urlImg">
            Url da imagem:
            <input
              type="text"
              name="urlImg"
              id="urlImg"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }

            />
          </label>

          <label htmlFor="raridade">
            Raridade:
            <select
              name="raridade"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="superTrunfo">
            Super Trunfo?
            <input
              type="checkbox"
              name="superTrunfosuperTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            className="saveBtn"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
