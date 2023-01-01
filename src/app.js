/* eslint-disable import/extensions */
import './scss/styles.scss';
import 'bootstrap';
import 'regenerator-runtime';

// eslint-disable-next-line import/extensions
import './script/component/app-bar.js';

import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
