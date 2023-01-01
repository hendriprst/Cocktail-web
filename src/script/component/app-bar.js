import DataSource from '../data/data-source';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      :root {
        --bg-primary: #06AED5;
      }

      .btn-custom, .bg-custom {
        background: var(--bg-primary);
      }
    </style>
    
    <nav class="navbar navbar-expand-lg bg-custom shadow">
      <div class="container-md">
        <a class="navbar-brand text-white" href="#">BarBar</a>
        <div class="btn-group">
          <button type="button" class="btn btn-custom text-white dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            Categories
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end"></ul>
        </div>
      </div>
    </nav>
      `;
    DataSource.getCategories()
      .then((categories) => {
        const ulElement = this.querySelector('.dropdown-menu');
        categories.forEach((category) => {
          const liElement = document.createElement('li');
          liElement.innerHTML = `<a class="dropdown-item" href="#">${category.strCategory}</a>`;
          ulElement.appendChild(liElement);
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }
}

customElements.define('app-bar', AppBar);
