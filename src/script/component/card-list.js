/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions
import './card-item.js';

class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <div class="alert alert-primary d-flex align-items-center container" role="alert">
      ${message}
    </div>`;
  }

  render() {
    this.innerHTML = '';
    this.className = 'row row-cols-1 row-cols-md-2';
    this._cards.forEach((card) => {
      const cardItemElement = document.createElement('card-item');
      this.longText = card.strInstructions;
      if (this.longText.length > 20) {
        this.longText = `${this.longText.substring(0, 20)}...<a class="text-decoration-none" href="#">Continue</a>`;
      }
      // eslint-disable-next-line no-param-reassign
      card.strInstructions = this.longText;

      cardItemElement.card = card;
      this.appendChild(cardItemElement);
    });
  }

  longText = ' ';
}

customElements.define('card-list', CardList);
