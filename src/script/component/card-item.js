/* eslint-disable no-underscore-dangle */
class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set card(card) {
    this._card = card;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .card:hover {
          transform: scale(1.05);
        }

        p.card-text {
          padding: 0;
          margin: 0;
        }
        
        @media screen and (max-width: 1024px) {
          .card:hover {
            transform: none;
          }

          h4, p.card-text {
            font-size: 12px;
          }
        }
      </style>

      <div class="card shadow mb-3 border-0">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${this._card.strDrinkThumb} class="img-fluid rounded-start" alt=${this._card.strDrink}>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text"><small class="text-muted">${this._card.strCategory}</small></p>
              <h4 class="card-title">${this._card.strDrink}</h4>
              <p class="card-text" id="longText"><small class="text-muted">Instruction: ${this._card.strInstructions}</small></p>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('card-item', CardItem);
