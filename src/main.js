import {render} from './render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const headerContainerElement = document.querySelector('.trip-controls__filters');
const boardContainerElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: boardContainerElement});

render(new FilterView(), headerContainerElement);
boardPresenter.init();

