import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onSaveButtonClick, onInputChange } = this.props;

    const superTrunfo = (
      <label htmlFor="superTrunfo">
        Super Trunfo?
        <input
          type="checkbox"
          name="cardTrunfo"
          id="superTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-card"
        />
      </label>);

    const textSuperTrunfo = <p>Você já tem um Super Trunfo em seu baralho</p>;

    return (
      <section>
        <h1>Adicionar Nova Carta</h1>

        <form className="containerLetter">
          <label htmlFor="name">
            Nome da Carta:
            <input
              type="text"
              name="cardName"
              className="name-input"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="descricao">
            Descrição da Carta:
            <textarea
              name="cardDescription"
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
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
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
              name="cardImage"
              id="urlImg"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="raridade">
            Raridade:
            <select
              name="cardRare"
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

          { hasTrunfo ? textSuperTrunfo : superTrunfo }

          <button
            className="saveBtn"
            type="submit"
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
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
