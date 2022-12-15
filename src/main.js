import {render} from './render.js';
import FilterView from './view/filter-view.js';

const filterContainerElement = document.querySelector('.trip-controls__filters');

render(new FilterView(), filterContainerElement);
