import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
    // onSaveButtonClick: '',
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
        cardAttr2, cardAttr3 } = this.state;
      const totalSumAttr = 210;
      const maxCharacterAttr = 90;

      const canNotBeEmpty = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0 && cardRare.length > 0; // True
      console.log(canNotBeEmpty);

      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const sumAttr = sum <= totalSumAttr;
      console.log(sumAttr, sum); // True

      const maxSizeAttr = Number(cardAttr1) <= maxCharacterAttr && Number(cardAttr2)
      <= maxCharacterAttr && Number(cardAttr3) <= maxCharacterAttr; // True
      console.log(maxSizeAttr);

      const attrNegative = Number(cardAttr1) >= 0 && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0; // True
      console.log(attrNegative);

      if (canNotBeEmpty && sumAttr && maxSizeAttr && attrNegative) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <main>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </main>
    );
  }
}

export default App;
