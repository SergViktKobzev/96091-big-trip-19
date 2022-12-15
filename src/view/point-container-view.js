import {createElement} from '../render.js';

function creatPointContainerTemplate() {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
}

export default class PointContainerView {
  getTemplate() {
    return creatPointContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  remuveElement() {
    this.element = null;
  }
}
