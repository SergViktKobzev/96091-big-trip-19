import {render} from '../render.js';
import PointContainerView from '../view/point-container-view.js';
import PoinView from '../view/point-view.js';
import PointNewView from '../view/point-new-view.js';
import SortView from '../view/sort-view.js';

const POINT_AMOUNT = 3;

export default class BoardPresenter {

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    const pointContainer = new PointContainerView();

    render(new SortView(), this.boardContainer);

    render(pointContainer, this.boardContainer);

    render(new PointNewView(), pointContainer.getElement());

    for (let i = 0; i < POINT_AMOUNT; i++) {
      render(new PoinView(), pointContainer.getElement());
    }
  }
}
