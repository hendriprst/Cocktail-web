/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <style>
      :root {
        --bg-primary: #06AED5;
        --bg-dark: #086788;
        --bg-neutral: #F2F4F3;
      }

      h1 {
        text-align: center;
      }

      span.radial-gradient {
        background: radial-gradient(
          circle,
          var(--bg-dark) 51%,
          var(--bg-primary) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      input[type="search"]:focus {
        background-color: var(--bg-neutral);
      }
      
      .jumbotron {
        border: 8px solid;
      }
      
      .full {
        border-image: linear-gradient(
          to left, 
          var(--bg-primary), 
          var(--bg-dark)) 1;
      }
      
      @media screen and (max-width: 500px) {
        h1, input[type="search"]::placeholder {
          font-size: 0.8rem;
        }
      }
    </style>

    <div class="jumbotron full container mt-4 mb-3 p-4">
      <h1 class="mb-4">You can't buy happiness, but you can <span class="radial-gradient">prepare a cocktail</span>, and that's the same thing</h1>
      <div class="input-group container">
        <input type="search" class="form-control" id="searchElement" placeholder="Search a Cocktail Name">
        <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
      </div>
    </div>
    `;
    this.querySelector('#button-addon2').addEventListener(
      'click',
      this._clickEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
