import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardsSaved: [],
    // filterName: '',
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

      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const sumAttr = sum <= totalSumAttr; // True

      const maxSizeAttr = Number(cardAttr1) <= maxCharacterAttr && Number(cardAttr2)
      <= maxCharacterAttr && Number(cardAttr3) <= maxCharacterAttr; // True

      const attrNegative = Number(cardAttr1) >= 0 && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0; // True

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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, cardsSaved, hasTrunfo } = this.state;

    cardsSaved.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });

    let stateHasTrunfo = false;
    if (hasTrunfo || cardTrunfo) stateHasTrunfo = true;

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      hasTrunfo: stateHasTrunfo,
      cardTrunfo: false,
    });
  }

  btnDeleteCard = (name) => {
    const { cardsSaved, hasTrunfo } = this.state;
    const newCardsSaved = cardsSaved.filter((card) => card.cardName !== name);
    if (hasTrunfo === true) {
      this.setState({
        cardsSaved: newCardsSaved,
        hasTrunfo: false,
      });
    }
  }

  // setFilterName = (event) => {
  //   this.setState({
  //     filterName: event.target.value,
  //   });
  // }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      cardsSaved,
      // filterName
    } = this.state;

    // const filteredCardName = cardsSaved.filter((cardItem) => {
    //   const cardItemFilter = cardItem.cardName;
    //   return cardItemFilter.includes(filterName);
    // });

    // const listfilteredCardName = filteredCardName.map((cardItem) => {
    //   const liFilterName = <li key={ cardItem }>{cardItem}</li>;
    //   return liFilterName;
    // });

    return (
      <main>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
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
        <CardList
          cardsSaved={ cardsSaved }
          btnDeleteCard={ this.btnDeleteCard }
        />
      </main>
    );
  }
}

export default App;
