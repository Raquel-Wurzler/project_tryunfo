import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <h1>Adicionar Nova Carta</h1>

        <form className="containerLetter">
          <label htmlFor="name">
            Nome da Carta:
            <input type="text" name="name" id="name" data-testid="name-input" />
          </label>

          <label htmlFor="descricao">
            Descrição da Carta:
            <textarea
              name="descricao"
              id="descricao"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="first-attribute">
            Primeiro Atributo da Carta:
            <input
              type="number"
              name="first-attribute"
              id="first-attribute"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="second-attribute">
            Segundo Atributo da Carta:
            <input
              type="number"
              name="second-attribute"
              id="second-attribute"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="third-attribute">
            Terceiro Atributo da Carta:
            <input
              type="number"
              name="third-attribute"
              id="third-attribute"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="urlImg">
            Url da imagem:
            <input
              type="text"
              name="urlImg"
              id="urlImg"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="raridade">
            Raridade:
            <select name="raridade" id="raridade" data-testid="rare-input">
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
            />
          </label>

          <button
            className="saveBtn"
            type="button"
            data-testid="save-button"
          >
            Salvar

          </button>
        </form>
      </section>
    );
  }
}

export default Form;
