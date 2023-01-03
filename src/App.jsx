import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import Header from './components/Header';
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
    filtered: [],
    notFiltered: false,
    isDisabledInputs: false,
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

  btnDeleteCard = (index) => {
    const { cardsSaved } = this.state;
    const newCardsSaved = cardsSaved.filter((_card, i) => i !== index);
    this.setState({ cardsSaved: newCardsSaved });
    if (cardsSaved[index].cardTrunfo === true) {
      console.log('test');
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  filteringName = ({ target }) => {
    const { value } = target;
    const { cardsSaved } = this.state;
    const nameFiltered = cardsSaved.filter((card) => card.cardName.includes(value));
    const notFilter = value.length !== 0 && nameFiltered.length === 0;
    this.setState({ filtered: nameFiltered, notFiltered: notFilter });
  };

  filteringRare = ({ target }) => {
    const { value } = target;
    const { cardsSaved } = this.state;
    const rareFiltered = cardsSaved.filter((card) => card.cardRare.includes(value));
    if (value === 'todas') {
      this.setState({ filtered: cardsSaved });
    }
    if (value === 'normal') {
      this.setState({ filtered: cardsSaved
        .filter((card) => card.cardRare.includes('normal')) });
    }
    if (value === 'raro') {
      this.setState({ filtered: cardsSaved
        .filter((card) => card.cardRare.includes('raro')) });
    }
    if (value === 'muito raro') {
      this.setState({ filtered: cardsSaved
        .filter((card) => card.cardRare.includes('muito raro')) });
    }
    if (rareFiltered.length === 0 && value !== 'todas') {
      this.setState({ filtered: [], notFiltered: true });
    }
  };

  filteringTrunfo = ({ target }) => {
    const { checked } = target;
    const { cardsSaved } = this.state;
    if (checked) {
      this.setState({
        filtered: cardsSaved.filter((card) => card.cardTrunfo === true),
        isDisabledInputs: true });
    }
    if (!checked) {
      this.setState({
        filtered: cardsSaved, isDisabledInputs: false,
      });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      cardsSaved, filterName, filtered, notFiltered, filterTrunfo, isDisabledInputs,
    } = this.state;

    const renderCard = (
      <div className="card-box">
        <h1 className="preview-letter">Preview da Carta</h1>
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
          filterName={ filterName }
        />
      </div>
    );

    return (
      <main>
        <Header />
        <div className="upside">
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
          { cardName === '' ? null : renderCard}
        </div>
        <div className="bottom">
          <CardList
            cardsSaved={ cardsSaved }
            filtered={ filtered }
            notFiltered={ notFiltered }
            btnDeleteCard={ this.btnDeleteCard }
            filteringName={ this.filteringName }
            cardRare={ cardRare }
            filteringRare={ this.filteringRare }
            filteringTrunfo={ this.filteringTrunfo }
            filterTrunfo={ filterTrunfo }
            isDisabledInputs={ isDisabledInputs }
          />
        </div>
      </main>
    );
  }
}

export default App;
